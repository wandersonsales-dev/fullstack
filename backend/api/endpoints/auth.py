from fastapi import APIRouter, HTTPException
from models.user import User
from api.services.auth import authenticate_user

router = APIRouter()

@router.post("/login")
def login(user: User):
    db_user = authenticate_user(user.username, user.password)
    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Logged in", "username": user.username}
