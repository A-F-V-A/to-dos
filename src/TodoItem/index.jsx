import React from "react"
import "./TodoItem.css"

//  radio_button_unchecked 
// task_alt
const TodoItem = props =>{

    return (
        <li className="TodoItem">
            <span 
                className={`material-symbols-outlined TodoItem__check  ${props.completed && 'TodoItem__check--success'} `}
                onClick={ props.onComplate }
            >
                {props.completed ? 'task_alt' : 'radio_button_unchecked'}
            </span>
            <p className={`TodoItem__text ${props.completed && 'TodoItem__text--completed'} `}>{props.text}</p>
            <span 
                className="material-symbols-outlined TodoItem__delete"
                onClick={ props.onDelete }
            >
                close
            </span>
        </li>
    )
}

export { TodoItem }