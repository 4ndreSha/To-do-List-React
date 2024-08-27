import React from 'react';
import { useState, useEffect } from 'react';
import { TodoForm } from '../TodoFrom';
import { Todo } from '../Todo';
import { v4 as uuidv4 } from 'uuid'; 
import { EditTodoForm } from '../EditTodoForm';

uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = (text) => {
        const newTodos = [...todos, {
            id: uuidv4(),
            text: text,
            completed: false,
            isEditing: false
        }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodoHandle = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodoHandle = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    }

    const toggleCompleteHandle = (id) => {
        const newTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTask = (text, id) => {
        const newTodos = todos.map((todo) => todo.id === id ? { ...todo, text, isEditing: !todo.isEditing } : todo)
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
    
    return (
        <div className='TodoWrapper'>
            <h1>Your own pin board !</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((item) => (
                item.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={item} />
                ) : (
                    <Todo key={item.id}
                        task={item}
                        deleteTodo={deleteTodoHandle}
                        editTodo={editTodoHandle}
                        toggleComplete={toggleCompleteHandle}
                    />
                )
            ))}
        </div>
    )
}