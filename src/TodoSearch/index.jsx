import React from "react";
import "./TodoSearch.css"

import { TodoContext } from "../TodoContext"

const TodoSearch = () =>{

    const {searchValue , setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChaange = (event) =>{
        setSearchValue(event.target.value)
    }

    return (
        <div className="TodoSearch">
            <input 
                type="text" 
                placeholder="Buscar mis TODOs" 
                onChange={onSearchValueChaange}
                value={searchValue}
            />
            <span className="material-symbols-outlined">
                search
            </span>
        </div>
    )
}

export { TodoSearch }