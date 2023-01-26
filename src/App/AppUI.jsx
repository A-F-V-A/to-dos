import React from "react"

// Componentes
import { TodoCounter }        from "../TodoCounter";
import { TodoSearch }         from "../TodoSearch";
import { TodoList }           from "../TodoList"
import { TodoItem }           from "../TodoItem"
import { CreateTodoButton }   from "../CreateTodoButton"



const AppUi = ({totalTodos,completedTodos,searchValue,setSearchValue,searchTodos,completeTodo,deleteTodo}) =>{
    return (
        <div className="container">
            <TodoCounter
            total={totalTodos}
            completed={completedTodos}
            />  
            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
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
            <CreateTodoButton/>
        </div>
    )
}

export { AppUi }