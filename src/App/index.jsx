import React from "react"
import { AppUi } from "./AppUI"

// import './App.css';

const defaultTodos = [
  {
    text:'Bañar mascota',
    completed:false
  },
  {
    text:'LLamer al hospital',
    completed:true
  },
  {
    text:'Tomar cursos de React',
    completed:false
  },
  {
    text:'Dar comida a mis mascotas',
    completed:true
  },
]



function App() {
  const [searchValue,setSearchValue] = React.useState('')
  const [todos,setTodos] =             React.useState(defaultTodos)

  const completedTodos =               todos.filter(f => !!f.completed).length
  const totalTodos =                   todos.length

  let searchTodos = []

  if(!searchValue.length >= 1){
    searchTodos = todos
  }else{
    searchTodos = todos.filter(f => 
        f.text.toLowerCase()
              .includes(searchValue.toLowerCase()) 
    )
  }

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed  = !!newTodos[todoIndex].completed ?false : true

    setTodos(newTodos)
  }

  const deleteTodo = (text) =>{
    const newTodos = todos.filter(todo => todo.text !== text)
    setTodos(newTodos)
  }

  return (
    <AppUi
      totalTodos =      {totalTodos}
      completedTodos =  {completedTodos}
      searchValue =     {searchValue}
      setSearchValue =  {setSearchValue}
      searchTodos =     {searchTodos}
      completeTodo =    {completeTodo}
      deleteTodo =      {deleteTodo}
        
    />
  )
}

export default App;
