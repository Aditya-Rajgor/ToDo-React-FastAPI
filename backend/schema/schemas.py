def individual_serial(todo) -> dict:
    return {
        "id": str(todo["_id"]),
        "user_id": str(todo["user_id"]),
        "name": todo["name"],
        "description": todo["description"],
        "complete": todo["complete"],
    }


def list_serial(todos) -> list:
    return [individual_serial(todo) for todo in todos]
