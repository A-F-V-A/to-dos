import React from "react";
import "./CreateTodoButton.css"

const CreateTodoButton = () =>{
    return(
        <button className="CreateTodoButton">
            <span className="material-symbols-outlined">
                add
            </span>
        </button>
    )
}

export { CreateTodoButton }