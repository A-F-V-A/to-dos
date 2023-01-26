import React from "react";
import "./TodoCounter.css"

const TodoCounter = ({ total, completed }) =>{
    return(
        <h2 className="TodoCounter">Has completado <span> {completed} </span> de {total} TODOs</h2>
    )
}


export {
    TodoCounter
} 