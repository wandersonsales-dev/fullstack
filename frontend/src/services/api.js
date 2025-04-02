import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8000"
})

export const login = (username, password) => api.post('/login', {username, password})

export const getTodos = (username) => api.get(`/todos?username=${username}`)

export const createTodo = (todo) => api.post('/todos', todo)

export const updateTodo = (todoId, todo) => api.put(`/todos/${todoId}`, todo)

export const deleteTodo = (todoId) => api.delete(`/todos/${todoId}`)
