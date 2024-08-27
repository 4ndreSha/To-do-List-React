import React from 'react';
import { useState } from 'react';
import { TodoForm } from '../TodoFrom';
import { Todo } from '../Todo';
import { v4 as uuidv4 } from 'uuid'; 
import { EditTodoForm } from '../EditTodoForm';

uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, {
            id: uuidv4(),
            text: text,
            completed: false,
            isEditing: false
        }]);
    }

    const deleteTodoHandle = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editTodoHandle = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    }

    const toggleCompleteHandle = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    const editTask = (text, id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, text, isEditing: !todo.isEditing } : todo));
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