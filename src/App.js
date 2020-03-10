import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

let todoData = [
  {
    task: 'Get started on To Do App',
    id: 1,
    completed: false
  },
  {
    task: 'Start Todo App Styling',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  //will need to pass todoData
  constructor()  {
    //initializing compoent state
    super();//this.state, this.setState, lifecycle methods
    this.state = {
      todoData: todoData
    };
  }

  //toggling complete handler, will need to pass this down through props to TodoList
  toggleComplete = clickedID => {
    this.setState({
      todoData: this.state.todoData.map(todo => {
        if ( todo.id === clickedID) {
          return {
            ...todo, 
            completed: !todo.completed
          };
        }else{
          return todo;
        }
      })
    });
  };

  //to add new todos to list, will need to pass this down through props to TodoForm
  addTodo = todoName => {
    let newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoData: [...this.state.todoData, newTodo]
    });
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(complete => (
        complete.completed !== true
      ))
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='app-body'>
        <div className='app-title'>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div className='todo-body'>
          {/* passing props addTodo and toggleComplete */}
          <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
          <TodoList todoData={this.state.todoData} toggleComplete={this.toggleComplete}/>
          {/* future reference, make sure its this.state.todoData and not this.todoData!!!! */}
          {console.log(todoData)}
        </div>
      </div>
    );
  }
}

export default App;
