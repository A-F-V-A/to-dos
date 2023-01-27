import React from "react";
import "./TodoCounter.css"

//Contexto
import { TodoContext } from "../TodoContext"

const TodoCounter = () =>{
    const { totalTodos:total, completedTodos:completed } = React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter">Has completado <span> {completed} </span> de {total} TODOs</h2>
    )
}


export {
    TodoCounter
} 