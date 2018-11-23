import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className='container mt-5'>
        <div className="row">
          <div className="col">
            <div className="jumbotron col-md-12">
              <h1 className="display-4">A Very Simple Todo App</h1>
              <p className="lead">Things I should be doing but not.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header"><h2>Add New Todo</h2></div>
              <div className="card-body">
                <div className="form-group">
                <label htmlFor=""><h4>I want to…</h4></label>
                <textarea className="form-control form-control-lg" rows="3" placeholder="Take control of my life."></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="priority"><h4>How Much of a Priority is this?</h4></label>
                  <select name="priority" id="prioritySelect" className="form-control form-control-lg">
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                  </select>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-lg btn-block">Add</button>
                </div>
              </div>
            </div>
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
              <div className="toDoList card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex">
                    <div className="input-group">
                      <div className="input-group-prepend p-2">
                        <div className="input-group-text form-check-inline bg-primary border-0">
                          <input type="checkbox" className="form-check-input"/>
                        </div>
                        <div className="">Todo item description Todo item description Todo item description</div>
                      </div>
                    </div>
                    <button className="m-2 p-2 pr-5 pl-5 btn btn-warning btn-lg">Edit</button>
                    <button className="m-2 p-2 pr-5 pl-5 btn btn-danger btn-lg">Delete</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
