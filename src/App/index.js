// import { useLocalStorage } from './useLocalStorage';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import React from 'react';

// const defaultTodos = [
//   {text: "hacer ejercicio", completed: true},
//   {text: "trabajar ", completed: false},
//   {text: "Estudiar ", completed: false},
//   {text: "Cocinar ", completed: true}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))


function App() {

  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App;
