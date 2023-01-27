import React from "react"
import { useLocalStorage } from "./useLocalStorage"


const TodoContext = React.createContext()

const TodoProvider = props => {

    let searchTodos = []

    const { 
        todos,
        saveItem: saveTodos,
        loading,
        error 
    } = useLocalStorage('TODOS_V1')

    const [searchValue, setSearchValue] = React.useState('')

    const completedTodos = todos.filter(f => !!f.completed).length
    const totalTodos = todos.length

    if (!searchValue.length >= 1) {
        searchTodos = todos
    } else {
        searchTodos = todos.filter(f =>
            f.text.toLowerCase()
                .includes(searchValue.toLowerCase())
        )
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !!newTodos[todoIndex].completed ? false : true

        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text)
        saveTodos(newTodos)
    }

    const [openModal, setOpenModal] = React.useState(false)

    //Agregar un nuevo Todo

    const addTodo = text =>{
        const newTodos = [...todos]
        newTodos.push({
            completed:false,
            text: text
        })
        saveTodos(newTodos)
    }


    return (
        <TodoContext.Provider value={{
            totalTodos,  
            completedTodos,  
            searchValue,  
            setSearchValue,  
            searchTodos, 
            completeTodo,  
            deleteTodo,  
            loading,  
            error, 
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export { TodoProvider, TodoContext }