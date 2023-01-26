import React from "react"
import "./TodoItem.css"

const TodoItem = props =>{
    return (
        <li className="TodoItem">
            <span className="material-symbols-outlined">
                done
            </span>
            <p>{props.text}</p>
            <span className="material-symbols-outlined">
                close
            </span>
        </li>
    )
}

export { TodoItem }