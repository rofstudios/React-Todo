import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
      todo: todoData,
      task: ''
    };
  }

  //toggling complete handler, will need to pass this down through props to TodoList
  toggleComplete = clickedID => {
    this.setState({
      todo: this.state.todoData.map(item => {
        if ( item.id === clickedID) {
          return {
            ...item, 
            completed: !item.purchased
          };
        }else{
          return item
        }
      })
    });
  };

  //to add new todos to list, will need to pass this down through props to TodoForm
  addTodo = todoName => {
    let newTodo = {
      task: todoName,
      id: Date.now(),
      purchased: false
    };

    this.setState({
      todo: [...this.state.todoData, newTodo]
    });
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='body'>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div className='todo-body'>
          <TodoForm addTodo={this.addTodo}/>
          <TodoList toggleComplete={this.toggleComplete} todoData={this.todoData}/>
        </div>
      </div>
    );
  }
}

export default App;
