import React from 'react'

const ToDo = props => {
  return (
    <div className="todo"
      onClick={() => props.toggleToDo(props.todo.id)}
      className={`todo${props.todo.completed ? ' completed' : ''}`}
    >
    <p>{props.todo.todo}</p>
    </div>
  )
}

export default ToDo