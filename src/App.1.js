import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
export class App extends React.component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };
    }
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />);
        return (<div className="todo-list">
            {todoItems}
        </div>);
    }
}
