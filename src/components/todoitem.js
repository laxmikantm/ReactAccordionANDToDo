import React from 'react';

function itemClickedFunction() {
  console.log('Item Clicked');
}

function ToDoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through'
  };


  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        // onChange={itemClickedFunction}
        // onChange={()=>console.log('Item clicked')}
        onChange={event => props.handleChange(props.item.id)}
        checked={props.item.completed}
      />
      <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </div>
  );
}

export default ToDoItem;
