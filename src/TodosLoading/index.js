import React from "react"
import "./TodosLoanding.css"

function TodosLoanding(){
    
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text"></p>
            <span className="LoadingTodo-deleteIcon"></span>

        </div>
    )
}

export {TodosLoanding}

