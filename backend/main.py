from fastapi import FastAPI, HTTPException, Depends
from config.database import get_user_by_username, create_user
from util.jwt_helper import create_access_token, decode_access_token
from models.usermodel import UserCreate, verify_password
from routes.route import router
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@app.post("/register")
async def register(user: UserCreate):
    existing_user = get_user_by_username(user.username)
    if existing_user:
        raise HTTPException(
            status_code=400, detail="Username already registered")

    create_user(user.username, user.password)
    return {"message": "User registered successfully"}


@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = get_user_by_username(form_data.username)
    if not user or not verify_password(form_data.password, user["password"]):
        raise HTTPException(
            status_code=400, detail="Invalid username or password")

    access_token = create_access_token(data={"sub": user["username"]})
    return {"access_token": access_token, "token_type": "bearer"}

# Authenticated endpoint example


@app.get("/users/me")
async def get_me(token: str = Depends(oauth2_scheme)):
    payload = decode_access_token(token)
    if payload is None:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = get_user_by_username(payload["sub"])
    return {"username": user["username"]}

# Allow all origins for development purposes
app.add_middleware(
    CORSMiddleware,
    # Update with your frontend origin
    allow_origins=["http://localhost:5173", "http://127.0.0.1"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
