from backend.db import todos

def get_user_todos(username: str):
    return [todo for todo in todos if todo["user"] == username]

def create_todo(todo: dict):
    todos.append(todo)
    return todo

def update_todo(todo_id: int, updated_todo: dict):
    for i, todo in enumerate(todos):
        if todo["id"] == todo_id:
            todos[i] = updated_todo
            return updated_todo
    return None

def delete_todo(todo_id: int):
    for i, todo in enumerate(todos):
        if todo["id"] == todo_id:
            del todos[i]
            return True
    return False