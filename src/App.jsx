import React from "react";
// Componentes
import { TodoCounter }        from "./TodoCounter";
import { TodoSearch }         from "./TodoSearch";
import { TodoList }           from "./TodoList"
import { TodoItem }           from "./TodoItem"
import { CreateTodoButton }   from "./CreateTodoButton"
// import './App.css';

const todos = [
  {
    text:'Cortar cebollo',
    completed:false
  },
  {
    text:'Tomar cursos de React',
    completed:false
  },
  {
    text:'Dar comida a mis mascotas',
    completed:false
  },
]



function App() {
  return (
    <>
    <div className="container">
      <TodoCounter/>  
      <TodoSearch/>
      <TodoList>
          {todos.map(t => (
            <TodoItem key={t.text} text={t.text}/>
          ))}
      </TodoList>
      <CreateTodoButton/>
    </div>

    </>
  )
}

export default App;
