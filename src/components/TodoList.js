// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            item: ''
        }
    }

    render() {
        return(
            <div>inside TodoList</div>
        )
    }
}

export default TodoList;