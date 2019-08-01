import React from 'react';

function itemClickedFunction() {
  console.log('Item Clicked')
}

function ToDoItem(props) {
  return (
    <div className='todo-item'>
      <input 
        type='checkbox' 
        // onChange={itemClickedFunction} 
        // onChange={()=>console.log('Item clicked')} 
        onChange={(event) => props.handleChange(props.item.id)} 
        checked={props.item.completed} 
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default ToDoItem;
