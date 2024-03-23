import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoanding } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import React from 'react';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
    
          <TodoCounter 
            completed={completedTodos} 
            total={totalTodos}
          />
    
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
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
    
          <CreateTodoButton />
    
        </React.Fragment>
      );
}

export {AppUI}