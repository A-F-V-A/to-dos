import React from "react";
import "./TodoForm.css"

//Contexto
import { TodoContext } from "../TodoContext"


const TodoForm = () =>{

    const [newTodoValue, setNewTodo] = React.useState('')

    const onWrite = (event) => setNewTodo(event.target.value)
        

    

    const { 
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext)

    const onCancelar = () => setOpenModal(false)

    const onSubmit = (event) =>{
        event.preventDefault()
        newTodoValue !== '' && addTodo(newTodoValue)
        setOpenModal(false)
    }
    

    return (
        <form 
            className="TodoForm"
            onSubmit={onSubmit}
        >
            <label>Nuevo TODO</label>
            <textarea
                className="TodoForm__textarea"
                value={newTodoValue}
                onChange = {onWrite}
                placeholder="Escribe tu TODO"
            />
            <div className="TodoForm__BoxBtn">
                <button 
                    className="TodoForm__BoxBtn__btn TodoForm__BoxBtn__btn--danger" 
                    type="button"
                    onClick={onCancelar}
                >
                    Cancelar
                    <span className="material-symbols-outlined ">
                        do_not_disturb_on
                    </span>
                </button>
                <button 
                    className="TodoForm__BoxBtn__btn TodoForm__BoxBtn__btn--success" 
                    type="submit"

                >
                    Agregar 
                    <span className="material-symbols-outlined">
                        add_circle
                    </span>
                </button>
            </div>
        </form>
    ) 
}


export { TodoForm }