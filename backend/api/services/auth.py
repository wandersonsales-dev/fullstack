from db import get_user

def authenticate_user(username: str, password: str):
    db_user = get_user(username)
    if not db_user or db_user["password"] != password:
        return None
    return db_user
