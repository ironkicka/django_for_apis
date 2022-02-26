import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

type TodoItem = {
    title: string;
    body: string;
}

function App() {
    const [todos, setTodos] = useState<TodoItem[]>([])

    const getTodos = () => {
        axios.get('http://localhost:8000/api/')
            .then(res => setTodos(res.data))
            .catch(console.log)
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            {todos.map(item => (
                <div>
                    <h1>{item.title}</h1>
                    <span>{item.body}</span>
                </div>
            ))}
        </div>
    );
}

export default App;
