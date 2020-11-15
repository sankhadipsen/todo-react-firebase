import { List, ListItem, ListItemText } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';
import React from 'react'
import "./Todo.css"

function Todo(props) {
    return (
        <List className="todo__list">
            <div class="item__display">
                <ListItem>
                    <ListItemText primary={props.todo.todo}secondary="Todo"/>
                </ListItem>
            </div>
            <div class="item__display">
                <DeleteForeverIcon onClick={event =>db.collection('todos').doc(props.todo.id).delete()}/>
            </div>
        </List>
        // <div>
        //     <li>{props.text}</li>
        // </div>
    )
}

export default Todo
