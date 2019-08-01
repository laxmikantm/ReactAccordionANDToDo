import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import todosData from './components/todosData';
import TODOITEM from './components/todoitem';
// import CONTACT from './components/';
import NavBar from './components/navbar';
import { Toolbar, Typography } from '@material-ui/core';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      count: -1
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    // this.setState({ count: 1 });
    this.setState((prevState) => {
      return ({ count: prevState.count + 1 });
    })
  };

  componentDidMount() {
    setTimeout(() => { this.handleClick(); }, 8000);
  }

  handleChange(id) {
    // this.setState((prevState,id) => {
    //   return ({ todos: prevState.todos.find( (todo,id)=> todo.id==id).completed = true})
    // })

    this.setState((prevState) => {
      const newTodDos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return ({
        todos: newTodDos
      })
    })

    console.log("Handle change hit. Id = ", id);

  }

  render() {
    /*
      Drip feed Json objects from JSON array
    */
    const todoItems = this.state.todos.map(item => <TODOITEM
      key={item.id}
      item={item}
      handleChange={this.handleChange}
    />);
    return (<>
    {/* /*
      Material Ui Sytetic Stuff for AppBar and......
    */}
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
               My To Do List
            </Typography>
          </Toolbar>    
         
        </AppBar>
           <NavBar />
        
      </div>
     {/* 
      Material Ui Sytetic Stuff......end..
    */}
     <div className='todo-list'>{todoItems}</div>
      <br />
      <h2>{this.state.count}</h2>
      <button onClick={this.handleClick.bind(this)}>Count Button </button>
      <br />
      {/* <CONTACT /> */}
    </>
    )
  }
}

export default App;





