from fastapi import APIRouter, HTTPExcepetion
from backend.models.user import User
from backend.api.services.auth import authenticate_user

router = APIRouter()

@router.post("/login")
def login(user: User):
    db_user = authenticate_user(user.username, user.password)
    if not db_user:
        raise HTTPExcepetion(status_code=401, details="Invalid credentials")
    return {"message": "Logged in", "username": user.username}
