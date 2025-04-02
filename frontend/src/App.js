import React, { useState } from 'react';
import Login from './components/Login';
import TodoList from './components/TodoList';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <div>
            {user ? <TodoList username={user} /> : <Login setUser={setUser} />}
        </div>
    );
};

export default App;