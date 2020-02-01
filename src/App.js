import React, { Component } from 'react';
import Header from './layouts/Header';
import Home from './layouts/Home';
import AddToDo from './components/AddToDo';
import ToDoList from './layouts/ToDoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/todolist' component={ToDoList} />
          <Route exact path='/addtodo' component={AddToDo} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
