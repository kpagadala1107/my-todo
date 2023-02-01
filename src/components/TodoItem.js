import {useState} from 'react';
import './TodoItem.css';

const TodoItem = props => {
    const [done,SetDone] = useState(false);

    const doneHandler = () => {
        return SetDone(!done);
    }

    const deleteHandler = () => {
        console.log(props.item.todo);
        props.onListChange(props.item);
    }

    return (
        <div className="item-card">
            <input type='checkbox' value={done} onChange={doneHandler}/>
            <p className={!done?'item-todo': 'item-todo item-todo-done'}> {props.item.todo} </p> 
            <p onClick={deleteHandler}>X</p>
        </div>
    )
}

export default TodoItem;