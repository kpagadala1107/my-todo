// import {useState} from 'react';
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = (props) => {
   // const [items,setItems] = useState(props.items);

    const handleListChange = (item) => {
        return (
           props.onTodoChange(item)
        )
    }

    return (
        <div className="todo-list">
            {props.items.map(item => <TodoItem onListChange={handleListChange} item={item} />)}
        </div>
    )
}

export default TodoList;