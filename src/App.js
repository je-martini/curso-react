import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// const defaultTodos = [
//   {text: "hacer ejercicio", completed: true},
//   {text: "trabajar ", completed: false},
//   {text: "Estudiar ", completed: false},
//   {text: "Cocinar ", completed: true}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function useLocalStorage(itemName, inicialValue){

  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(inicialValue));
    parsedItem = inicialValue;
  } else{
    parsedItem = JSON.parse(localStorageItem);
  }

  // parsedTodos = JSON.parse(localStorageItem);
  const [ item, setItem ] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  }

  return [item, saveItem ];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText) 
    }
  )

 

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    
    saveTodos(newTodos);
  
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    
    saveTodos(newTodos);
  
  }

  
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





export default App;
