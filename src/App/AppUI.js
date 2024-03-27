import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoanding } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';

function AppUI() {
  const   {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
    return (
        <React.Fragment>
    
          <TodoCounter/>
    
          <TodoSearch/>

              
            <TodoList >
              { loading && (<>
              <TodosLoanding/>
              <TodosLoanding/>
              <TodosLoanding/>
              </>)}
              { error && <TodosError/>}
              {(!loading && searchedTodos.length === 0) &&
              (<>
              <EmptyTodos/>
              <EmptyTodos/>
              <EmptyTodos/>
              </>)
              }

                {searchedTodos.map(todo => (
                  
                  <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                    
                  />
                ))}
            </TodoList>
    
          <CreateTodoButton 
            setOpenModal= {setOpenModal}
          />

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
    
        </React.Fragment>
      );
}

export {AppUI}