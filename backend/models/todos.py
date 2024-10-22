from pydantic import BaseModel, Field
from typing import Optional


class Todo(BaseModel):
    user_id: str
    name: str
    description: str
    complete: bool
