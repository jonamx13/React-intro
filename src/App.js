import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Slice Onion', completed: true },
  { text: 'Attend React.js Intro Course', completed: false },
  { text: 'To cry with La Llorona', completed: false },
  { text: 'Something else', completed: false },
  { text: 'Complete derivated states', completed: true },

];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

  console.log('Users are looking for: ' + searchValue);

  return (
    <>
      <TodoCounter 
      completed={completedTodos}
      total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
