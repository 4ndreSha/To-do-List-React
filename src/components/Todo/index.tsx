import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({ task, editTodo, deleteTodo, toggleComplete }) => {
    return (
        <div className='Todo'>
            
            <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
                {task.text}
            </p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}