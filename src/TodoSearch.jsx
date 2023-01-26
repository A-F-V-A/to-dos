import React from "react";
import "./TodoSearch.css"

const TodoSearch = () =>{
    return (
        <div className="TodoSearch">
            <input type="text" placeholder="Buscar mis TODOs" />
            <span className="material-symbols-outlined">
                search
            </span>
        </div>
    )
}

export { TodoSearch }