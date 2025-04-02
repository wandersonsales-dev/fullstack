users = [
    {"username": "admin", "password": "1234"},
    {"username": "user", "password": "abcd"}
]

todos = [
    {"id": 1, "title": "Learn FastAPI", "completed": False, "user": "admin"}
]

def get_user(username: str):
    return next((u for u in users if u["username"] == username), None)
