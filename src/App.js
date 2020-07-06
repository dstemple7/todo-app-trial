import React from 'react';
import ReactDOM from 'react-dom'
import ToDo from "./components/Todo"
import ToDoForm from "./components/TodoForm"
import ToDoList from "./components/TodoList"
import "./components/Todo.css"

const todos = [
  {
    todo: 'Complete MVP for Lambda Schizzoool',
    id: Date.now(),
    completed:false
  },
  {
    todo: "Lost 100 lbs",
    id: Date.now()+1,
    completed:false
  },
  {
    todo: "Vote for Kanye",
    id: Date.now()+2,
    completed:false
  },
  {
    todo: "Tell Shanda's TL that Shanda deserves a raise",
    id: Date.now()+3,
    completed:false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      todos: todos
    }
  }
  addToDo = toDoName => {
    const newToDo = {
      todo: toDoName,
      id: new Date(),
      completed:false
    }
    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  }
  toggleToDo = toDoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id ===toDoId) {
          return {
            ...todo,
            completed: !todo.completed
            } 
          } else {
            return todo
        }
      })
    })
  }

  clearCompleted = () => {
    const stillToDo = this.state.todos.filter(todo => !todo.completed)
    this.setState({ todos: [...stillToDo]})
  }
  
  render() {
    return (
      <div className="App">
        <h2>2DN <br></br> My To DONE List</h2>
        <div className="todos">
          <ToDoList
            toggleToDo={this.toggleToDo}
            todos={this.state.todos}
          />
        </div>
        <div>
          <ToDoForm 
            addToDo={this.addToDo}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
