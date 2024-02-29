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
  {text: "cocinar ", completed: false}
]

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);
  
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>

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
