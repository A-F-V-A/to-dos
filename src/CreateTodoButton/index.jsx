import React from "react";
import "./CreateTodoButton.css"

//Contexto
import { TodoContext } from "../TodoContext"

const CreateTodoButton = () =>{


    const { setOpenModal } = React.useContext(TodoContext)

    const onClickButton = () => setOpenModal(state => !state)
    
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