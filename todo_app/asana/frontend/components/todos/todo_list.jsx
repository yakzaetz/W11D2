import React from "react";
import { todoListItem } from "./todo_list_item";
import TodoForm from "./todo_form";

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => {
                        return (todoListItem(todo))
                    })}
                </ul>
                <TodoForm receiveTodo={this.props.receiveTodo} />
            </div>
        )
    }
}

export default TodoList;