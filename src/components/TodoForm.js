import React, {useState} from 'react'
import './TodoForm.css'

const TodoForm = props => {

    const [todo, setTodo] = useState('');

    const changeHandler = (event) => {
        setTodo(event.target.value);
    }

    const todoHandler = () => {
        const item = {todo: todo};
        console.log({item});
        props.onTodoSubmit(item);
        setTodo('');
    }

    return (
        <div className='todo-form'>
            <input className='todo-input' type='text' value={todo} onChange={changeHandler}></input>
            <button className='todo-button' onClick={todoHandler}>Add Todo </button>
        </div>
    )
}

export default TodoForm;