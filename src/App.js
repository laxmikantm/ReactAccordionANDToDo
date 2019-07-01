import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/todoitem';

function App() {
  return (
    <div className='todo-list'>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;
