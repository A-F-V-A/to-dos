import React from "react";
import "./CreateTodoButton.css"

const CreateTodoButton = () =>{

    const onClickButton = () =>{
        alert('Modal')
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            <span className="material-symbols-outlined">
                add
            </span>
        </button>
    )
}

export { CreateTodoButton }