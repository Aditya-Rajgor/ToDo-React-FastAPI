from bson import ObjectId
from config.database import collection_name, get_user_by_username
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from models.todos import Todo
from schema.schemas import individual_serial, list_serial
from util.jwt_helper import decode_access_token

# Define oauth2_scheme for token authentication
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

router = APIRouter()

# GET Request method


@router.get("/")
async def home_page():
    return {"message": "The backend is running..."}


@router.get("/get-todo")
async def get_todo(token: str = Depends(oauth2_scheme)):
    payload = decode_access_token(token)
    if payload is None:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = get_user_by_username(payload["sub"])
    todos = list_serial(
        list(collection_name.find({"user_id": user["username"]})))
    # print(todos)
    return todos

# POST Request method


@router.post("/add-todo")
async def create_todo(todo: Todo, token: str = Depends(oauth2_scheme)):
    payload = decode_access_token(token)
    if payload is None:
        raise HTTPException(status_code=401, detail="Invalid token")
    # user = get_user_by_username(payload["sub"])
    new_todo = {
        "user_id": payload["sub"],
        "name": todo.name,
        "description": todo.description,
        "complete": todo.complete
    }
    print(new_todo)
    collection_name.insert_one(dict(todo))

# PUT Request Method


@router.put("/{id}")
async def update_todo(id: str, todo: Todo):
    collection_name.find_one_and_update(
        {"_id": ObjectId(id)},
        {"$set": dict(todo)}
    )
    updated_todo = individual_serial(
        collection_name.find_one({"_id": ObjectId(id)}))
    return updated_todo

# DELETE Request Method


@router.delete("/{id}")
async def delete_todo(id: str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})
    return {"message": "Todo has been deleted"}
