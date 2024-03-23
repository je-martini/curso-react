import React from "react";
import './EmptyTodos.css'

function EmptyTodos() {
    return (
            <div className="LoadingTodo--container">
                <span className="LoadingTodo--completeIcon"></span>
                <p className="LoadingTodo--text"></p>
                <p>it's time to create your firts to do</p>
                <span className="LoadingTodo--deleteIcon"></span>
    
            </div>
        
    )
}

export {EmptyTodos}