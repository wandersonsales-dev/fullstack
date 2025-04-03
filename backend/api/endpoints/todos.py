from fastapi import APIRouter, HTTPException
from models.todo import Todo
from api.services.todos import get_user_todos, create_todo, update_todo, delete_todo

router = APIRouter()

@router.get("/todos")
def get_todos(username: str):
    return get_user_todos(username)

@router.post("/todos")
def create_todo_endpoint(todo: Todo):
    return create_todo(todo.dict())

@router.put("/todos/{todo_id}")
def update_todo_endpoint(todo_id: int, updated_todo: Todo):
    result = update_todo(todo_id, updated_todo.dict())
    if not result:
        raise HTTPException(status_code=404, detail="Todo not found")
    return result

@router.delete("/todos/{todo_id}")
def delete_todo_endpoint(todo_id: int):
    if not delete_todo(todo_id):
        raise HTTPException(status_code=404, detail="Todo not found")
    return {"message": "Todo deleted"}
