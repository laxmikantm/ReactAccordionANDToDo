import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import todosData from './components/todosData';
import TODOITEM from './components/todoitem';
import Conditional from './components/Conditional';
// import CONTACT from './components/';
import NavBar from './components/navbar';
import LOGINLOGOUTCOMP from './components/signin/loginlogout';
import CONSUMEAPI from './components/API/consumeAPI';
import AddToDoItemForm from './components/AddToDoItemForm';
import { Toolbar, Typography } from '@material-ui/core';
import Contact from './routers/contact';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      todos: todosData,
      count: -1
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 

  handleClick = () => {
    this.setState((prevState) => {
      return ({ count: prevState.count + 1 });
    })
  };

  componentDidMount() {
    setTimeout(() => { 
      this.setState({
        isLoading:false
      });
      this.handleClick();
       }, 
      1500);
  }



  handleChange(id) {
    // this.setState((prevState,id) => {
    //   return ({ todos: prevState.todos.find( (todo,id)=> todo.id==id).completed = true})
    // })

    this.setState((prevState) => {
      const newTodDos = prevState
        .todos
        .map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      
      return ({
        todos: newTodDos
      });
    });
  }

  childHandler(e) {
    e.preventDefault();
    let object = todosData;
    const toAddObject = { 'id': Math.random(), 'text': e.target.value, 'completed': false };
    object.push(toAddObject);
    this.setState({
      todos: object
    })
    alert(JSON.stringify(object));
  }

  addItem(itemText) {
    let object = todosData;
    const toAddObject = { 'id': Math.random(), 'text': itemText, 'completed': false };
    object.push(toAddObject);
    this.setState({
      todos: object
    })
    alert(JSON.stringify(object));
  }

  render() {
    /*
      Drip feed Json objects from JSON array
    */
    const todoItems = this.state.todos.map(item => 
          (<TODOITEM
            key={item.id}
            item={item}
            handleChange={this.handleChange} />
      ));

    return (
    <>
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
        
      <br />
      <LOGINLOGOUTCOMP />
     {/* 
      Material Ui Sytetic Stuff......end..
    */}
    <Conditional isLoading={this.state.isLoading} />
        <div className='todo-list'>{todoItems}
        </div>
        <br />
        {/* <AddToDoItemForm handler={this.childHandler.bind(this)} /> */}
        <AddToDoItemForm onSubmit={(itemText) => {
          this.addItem(itemText);
        }} />
        <CONSUMEAPI />
        <br />
        <h2>{this.state.count}</h2>
      <button onClick={this.handleClick}>Count Button </button>
    </>
    )
  }
}

export default App;





