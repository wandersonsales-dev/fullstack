import React, { useState } from 'react';
import { login } from '../services/api';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await login(username, password);
            setUser(res.data.username);
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <div>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;