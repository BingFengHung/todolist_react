import React, { Component } from 'react'
import ReactDom from 'react-dom'
import TodoItems from "./TodoItems";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Go to market.', 
                'To buy goods.', 
                'Go to studio.'
            ]
        }
    }
    render() {
        return (
            <ul>
                {
                    this.state.items.map(item => {
                        return ( <TodoItems items={item}/>)
                    })
                }
            </ul>
        )
    }
}

export default TodoList;