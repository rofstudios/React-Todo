import React from 'react';

let Todo = props => {
    return (
        <div className={`todo ${props.todo.completed ? 'completed' : ''}`} 
        onClick={()=> props.toggleComplete(props.todo.id)}
        >
            <h4>{props.todo.task}</h4>
        </div>
    )
}

export default Todo;