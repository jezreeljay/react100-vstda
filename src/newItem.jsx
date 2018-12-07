import React from 'react';

const newItem = (props) => (
    <div className="card">
    <div className="card-header"><h2>Add New Todo</h2></div>
    <div className="card-body">
    <div className="form-group">
        <label htmlFor=""><h4>I want to…</h4></label>
        <textarea id="cool" name="text" className="form-control form-control-lg" rows="3" placeholder="Take control of my life." onChange={props.handleToDo}></textarea>
    </div>
    <div className="form-group">
        <label htmlFor="priority"><h4>How Much of a Priority is this?</h4></label>
        <select name="priority" onChange={props.handleToDo} id="prioritySelect" className="form-control form-control-lg">
        <option value={1}>High</option>
        <option value={2}>Medium</option>
        <option value={3}>Low</option>
        </select>
    </div>
    <div className="form-group">
        <button onClick={props.addItem} className="btn btn-primary btn-lg btn-block">Add</button>
    </div>
    </div>
</div>
)

export default newItem;