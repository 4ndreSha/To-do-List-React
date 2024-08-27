import React from 'react';
import { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('');
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'
                className='todo-input todo-input__edit'
                value={value}
                placeholder='Update yor task ;)'
                onChange={(e) => {setValue(e.target.value)}}
            />
            <button type='submit' className='todo-btn'>Confirm</button>
        </form>
    )
}