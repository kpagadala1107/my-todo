import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoList = [{todo: 'Gym'}];

function App() {

  const [items, setItems] = useState(todoList);

  const addItemList = (item) => {
    setItems(prevItems => {
      return [item, ...prevItems]
    })
  }

  const changeHandler = deletedItem => {
    setItems(prevItems => {
      return prevItems.filter(item => (item.todo !== deletedItem.todo))
    })
  }

  return (
    <div className="App">
      <TodoForm onTodoSubmit={addItemList}/>
      <TodoList onTodoChange={changeHandler} items={items}/>
    
    </div>
  );
}

export default App;
