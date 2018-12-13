import React from 'react';
import ToDoItem from './toDoItem';

const toDoItemList = ({toDoList, completeItem, deleteItem, editItem, handleToDo, test}) => (
    <div className="toDoList card-body">
    <ul className="list-group">
        {toDoList.map(toDoItem => (
        <ToDoItem key={toDoItem.id} id={toDoItem.id} priority={toDoItem.priority} editEnabled={toDoItem.editEnabled} text={toDoItem.text} completed={toDoItem.completed} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem} handleToDo={handleToDo} test={test}/>))}
    </ul>
</div>
)

export default toDoItemList;