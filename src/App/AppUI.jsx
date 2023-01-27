import React from "react"

// Componentes
import { TodoCounter }        from "../TodoCounter";
import { TodoSearch }         from "../TodoSearch";
import { TodoList }           from "../TodoList"
import { TodoItem }           from "../TodoItem"
import { CreateTodoButton }   from "../CreateTodoButton"
import { TodoForm }           from "../TodoForm"

//Portal
import { Modal }              from "../Modal"

//Contexto
import { TodoContext } from "../TodoContext"


const AppUi = () =>{

    const {
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal
    } =  React.useContext(TodoContext)

    return (
        <div className="container">
            <TodoCounter/>  
            <TodoSearch/>
            <TodoList>
                        {searchTodos.map(t => (
                        <TodoItem 
                            key =        {t.text}
                            text=        {t.text}
                            completed =  {t.completed}
                            onComplate = { () => completeTodo(t.text)}
                            onDelete =   { () => deleteTodo(t.text)}
                        />
                        ))}
                    </TodoList>
            {
                !!openModal &&
                    (
                        <Modal>
                            <TodoForm/>
                        </Modal>
                    )
            }
            <CreateTodoButton/>
        </div>
    )
}

export { AppUi }