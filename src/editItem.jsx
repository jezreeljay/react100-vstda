import React from 'react';

const editItem = (props) => (
    <div className="card">
    <div className="card-header"><h2>Edit Item</h2></div>
    <div className="card-body">
    <div className="form-group">
        <label htmlFor=""><h4>I want to…</h4></label>
        <textarea name="text" className="form-control form-control-lg update-todo-text" rows="3" onChange={props.handleToDo}></textarea>
    </div>
    <div className="form-group">
        <label htmlFor="priority"><h4>How Much of a Priority is this?</h4></label>
        <select name="priority" onChange={props.handleToDo} id="prioritySelect" className="form-control form-control-lg update-todo-priority">
        <option value="1">High</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
        </select>
    </div>
    <div className="form-group">
        <button onClick={() => {props.test(props)}} className="btn btn-primary btn-lg btn-block update-todo">Update</button>
    </div>
    </div>
</div>
)

export default editItem;