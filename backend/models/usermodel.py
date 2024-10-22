from pydantic import BaseModel
from bson import ObjectId
from passlib.context import CryptContext
from typing import Optional

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# Pydantic model for user creation


class UserCreate(BaseModel):
    username: str
    password: str


class User(BaseModel):
    username: str

    class Config:
        json_encoders = {
            ObjectId: str
        }