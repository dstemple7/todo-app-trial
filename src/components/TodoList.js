import React from "react"
import ToDo from "./Todo"

class ToDoList extends React.Component {
  render(){
  return (
    <div className="todo-list">
      {this.props.todos.map(todo => (
        <ToDo toggleToDo={this.props.toggleToDo} key={todo.id} todo={todo} />
      ))}
    </div>
    )
  }
}
export default ToDoList