import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    const myStyle = {
        minHeight: "70vh"
    }

    return (
        <div className="container" style={myStyle}>
            <h3 className="mt-4 my-3">ToDo List</h3>
            {props.todos.length===0? <p className="text-center my-3">ToDo list empty. </p>: 
             props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>})}
        </div>
    )
}
