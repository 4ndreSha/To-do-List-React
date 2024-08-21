import React from 'react';
import { useState } from 'react';
import { TodoForm } from '../TodoFrom';
import { Todo } from '../Todo';
import { v4 as uuidv4 } from 'uuid'; 

uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, {
            id: uuidv4(),
            text: todo,
            completed: false,
            isEditing: false
        }]);
    }

    return (
        <div className='TodoWrapper'>
            <TodoForm addTodo={addTodo}/>
            {todos.map((item) => (
                <Todo task={item}/>
            ))}
        </div>
    )
}