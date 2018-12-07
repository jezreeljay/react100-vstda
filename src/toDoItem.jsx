import React from 'react';
import editItem from './editItem';

const toDoItem = (props) => (
    <div className="row">
    <div className="input-group">
    <div className="input-group-prepend">
        <div className="input-group-text">
        <input className="m-3" type="checkbox" onClick={() => {props.completeItem(props)}} aria-label="Checkbox for following text input"/>
        </div>
    </div>
    <div type="text" className="border p-3" aria-label="Text input with checkbox">
        {props.text}
    </div>
    <div>
    {(props.priority == 1) ? "High" : (props.priority == 2) ? "Medium" : "Low"}
    </div>
    </div>
    {props.editEnabled === true ? <editItem /> : <button onClick={() => {props.editItem(props)}} className="m-2 pr-3 pl-3 btn btn-warning">Edit</button>}
    <button onClick={() => {props.deleteItem(props)}} className="m-2 pr-3 pl-3 btn btn-danger">Delete</button>
    <editItem/>
    </div>
)

export default toDoItem;
