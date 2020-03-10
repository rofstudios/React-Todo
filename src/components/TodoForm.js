import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            newTask: ''
        }
    }

    handleSubmit = event => { //to be used to prevent default actons of form, using onSubmit inside form tag
        event.preventDefault();
        this.props.addTodo(this.state.newTask);
        this.setState({
            newTask: ''
        });
    };

    handleChanges = event => { //to be used to track input by adding onChange to it
        this.setState({
            newTask: event.target.value
        });
    }

    render () {
        return (
            <div onSubmit={this.handleSubmit} className='body'>
            <div>inside TodoForm</div>
            <form>
                <label htmlFor='newTask'>New task: </label>
                <input id='newTask' type='text' name='newTask' onChange={this.handleChanges}/>
            </form>
            </div>
        )
    }
}

export default TodoForm;