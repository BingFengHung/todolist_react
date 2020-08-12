import React, { Component } from 'react'
import ReactDom from 'react-dom'

class TodoItem extends Component {
    render() {
        return ( 
            <li> 
                <div> 
                    { this.props.items } 
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </li>
        );
    }
}

export default TodoItem;