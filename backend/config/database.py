from pymongo import MongoClient
from models.usermodel import hash_password
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
MONGO_DB_USERNAME = os.getenv("MONGO_DB_USERNAME")
MONGO_DB_PASSWORD = os.getenv("MONGO_DB_PASSWORD")
MONGO_DB_CLUSTER = os.getenv("MONGO_DB_CLUSTER")


client = MongoClient(
    f"mongodb+srv://{MONGO_DB_USERNAME}:{MONGO_DB_PASSWORD}@{MONGO_DB_CLUSTER}.pu98x.mongodb.net/?retryWrites=true&w=majority&appName={{MONGO_DB_CLUSTER}}")


db = client.todo_db
users_collection = db.users


def create_user(username: str, password: str):
    hashed_password = hash_password(password)
    new_user = {"username": username, "password": hashed_password}
    return users_collection.insert_one(new_user)


def get_user_by_username(username: str):
    return users_collection.find_one({"username": username})


collection_name = db["todo_collection"]
