import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../services/api';

const TodoList = ({ username }) => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const res = await getTodos(username);
        setTodos(res.data);
    };

    const addTodo = async () => {
        const newTodo = { id: todos.length + 1, title, completed: false, user: username };
        await createTodo(newTodo);
        fetchTodos();
        setTitle('');
    };

    const toggleTodo = async (todo) => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        await updateTodo(todo.id, updatedTodo);
        fetchTodos();
    };

    const removeTodo = async (todoId) => {
        await deleteTodo(todoId);
        fetchTodos();
    };

    return (
        <div>
            <h1>Todos for {username}</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? 'Done' : 'Pending'}
                        <button onClick={() => toggleTodo(todo)}>Toggle</button>
                        <button onClick={() => removeTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;