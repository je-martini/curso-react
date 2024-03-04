import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: "hacer ejercicio ", completed: true},
  {text: "trabajar ", completed: false},
  {text: "estudiar ", completed: false},
  {text: "cocinar ", completed: true}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  
  const totalTodos = todos.length;
  
  

  console.log(searchValue === 'estudiar')

  console.log(defaultTodos)

  const item1 = todos.find( e => e.text === searchValue)
  console.log(item1)
  
  return (
    <React.Fragment>

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}/>

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList >
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}





export default App;
