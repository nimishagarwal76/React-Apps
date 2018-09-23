import React from 'react'
import './Todos.css'

const Todos = ({todos, deleteTodo})=>{
    const todoList = todos.length?(todos.map((todo)=>{
        return (
            <div onClick={()=>{deleteTodo(todo.id)}} className="collection-item" key={todo.id}>
                <span>{todo.content}</span>
            </div>
        )
    })):(
        <p className="center">You have no Todo left</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos