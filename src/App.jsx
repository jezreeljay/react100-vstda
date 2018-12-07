import React, { Component } from 'react';
import NewItem from './newItem';
import ToDoItemList from './toDoItemList';

class App extends Component {  
  constructor(props) {
    super(props);
    this.handleToDo = this.handleToDo.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.test = this.test.bind(this);
    this.state = {
      toDoList: [],
      itemCounter: 1,
      priority: 1,
    }
  }
  
  handleToDo(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = {
      completed: false,
      editEnabled: false,
      priority: parseInt((this.state.priority != 1) ? this.state.priority : 1),
      text: this.state.text,
      id: this.state.itemCounter++ 
    };
    this.state.toDoList.push(newItem);
    this.setState({toDoList: this.state.toDoList});
  }

  deleteItem(props) {
    console.log(props);
  }

  completeItem(props) {
    console.log("completed:", props.completed);
  }

  editItem(props) {
    console.log("editEnabled:", props.editEnabled);
  }

  test() {
    console.log(this.state.toDoList);
  }

  render() {
    return (
      <div className='container mt-5'>
        <div className="row">
          <div className="col">
            <div className="jumbotron col-md-12">
              <h1 className="display-4">A Very Simple Todo App</h1>
              <p className="lead">Things I should be doing but not.</p>
              <button onClick={this.test}>See State</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NewItem addItem={this.addItem} handleToDo={this.handleToDo}/>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h2>View Todos</h2>
              </div>
              <div className="card-body">
                <h2>Welcome to this very simple todo app!</h2>
                <p className="lead">Get started now by adding a new list item on the left.</p>
              </div>
                <ToDoItemList toDoList={this.state.toDoList} completeItem={this.completeItem} deleteItem={this.deleteItem} editItem={this.editItem}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
