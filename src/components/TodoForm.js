import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            newTask: ''
        }
    }

    handleChanges = event => { //to be used to track input by adding onChange to it
        this.setState({
            newTask: event.target.value
        });

    }

    handleSubmit = event => { //to be used to prevent default actons of form, using onSubmit inside form tag
        event.preventDefault();
        this.props.addTodo(this.state.newTask);
        this.setState({
            newTask: ''
        });
    };
    
    render () {
        return (
            <div className='form-container'>
                <form onSubmit={this.handleSubmit} className='form-body'>
                    <div className='input-container'>
                        <label htmlFor='newTask'>New task: </label>
                        <input id='newTask' type='text' name='newTask' onChange={this.handleChanges}/>
                    </div>
                    <div className='btn-container'>
                        <button className='btn btn-add'>Add TODO</button>
                        <button className='btn btn-clear' onClick={this.props.clearCompleted}>Clear Completed Tasks</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;