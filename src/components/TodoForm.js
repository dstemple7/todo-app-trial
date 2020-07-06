import React from 'react'

class ToDoForm extends React.Component {
  constructor(){
    super()
    this.state={
      todo: ''
    }
  }
  handleChanges = e => {
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToDo(this.state.todo)
    this.setState({
      todo: ''
    })
  }
  
  render() {
    return (
      <form class="form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="...what's popping?" name ="todo" value={this.state.todo} onChange={this.handleChanges}/>
        <br />
        <button>Add Todo</button>
        <br />
        <br />
        <button onClick={this.props.clearCompleted} class="clearCompleted"> Clear Completed </button>
      </form>
    )
  }
}

export default ToDoForm