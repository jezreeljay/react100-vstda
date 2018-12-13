import React from 'react';
import EditItem from './editItem';

const toDoItem = (props) => (
<li className="list-group-item container" className={(props.priority == 1) ? "list-group-item container alert-success success" : (props.priority == 2) ? "list-group-item container alert-warning" : "list-group-item container alert-danger"}>
    <div className="row">
        <div className="col">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    <input className="m-3" type="checkbox" onClick={() => {props.completeItem(props)}} aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <div type="text" className="border p-3" aria-label="Text input with checkbox">
                    {props.text}
                </div>
                {console.log(props, props.text)}
                <a onClick={() => {props.editItem(props)}} className="m-2 pr-3 pl-3 btn btn-warning edit-todo">Edit</a>
                <a onClick={() => {props.deleteItem(props)}} className="m-2 pr-3 pl-3 btn btn-danger delete-todo">Delete</a>
            </div>
        </div>
        
    </div>
    {props.editEnabled === true ? <div className="row"><div className="col"><EditItem test={props.test} text={props.text} priority={props.priority} id={props.id} handleToDo={props.handleToDo}/></div></div> : null}
</li>
)

export default toDoItem;


