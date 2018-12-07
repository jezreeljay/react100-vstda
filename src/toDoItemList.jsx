import React from 'react';
import ToDoItem from './toDoItem';

const toDoItemList = ({toDoList, completeItem, deleteItem, editItem}) => (
    <div className="toDoList card-body">
    <ul className="list-group">
        <li className="list-group-item container">
        {toDoList.map(toDoItem => (
        <ToDoItem key={toDoItem.id} id={toDoItem.id} priority={toDoItem.priority} editEnabled={toDoItem.editEnabled} text={toDoItem.text} completed={toDoItem.completed} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem}/>))}
        </li>
    </ul>
</div>
)

export default toDoItemList;