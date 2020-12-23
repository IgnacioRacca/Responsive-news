
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './App.css';



class App extends Component {
  state= {
    todos: [
      // {
      //   id: uuidv4(),
      //   title: 'toma esta basura',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'toma esta mierda',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'toma esta',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => 
    this.setState({ todos: res.data }))
    //console.log(res.data))
  }

  // markComplete = () => {
  //   console.log('from App.js')
  // }

  //toogle complete
  markComplete = (id) => {
    //console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //delete Todo
  delTodo = (id) => {
    //console.log(id)
    // this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)] });

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)] }));
  }

  //Add todo
  addTodo = (title) => {
    //console.log(title)
    //const newTodo = {
      // id: uuidv4(),
      // //title: title, en ES6 puedo escribir solo title
      // title,
      // completed: false
      
    //}
    // this.setState({ todos: [...this.state.todos, newTodo] });
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }) );
    
  }
  
  render() {
    //console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div    className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/About" component={About} />
          </div>
        </div>
      </Router>
      
    );
  }
}
  

export default App;
