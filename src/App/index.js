import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   { text: 'Slice Onion', completed: true },
//   { text: 'Attend React.js Intro Course', completed: false },
//   { text: 'To cry with La Llorona', completed: false },
//   { text: 'Something else', completed: false },
//   { text: 'Complete derivated states', completed: true },

// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

    console.log('Log 1');

    // React.useEffect(() => {      
    //   console.log('Log 2');
    // });

    // React.useEffect(() => {      
    //   console.log('Log 2');
    // }, []);

    React.useEffect(() => {      
      console.log('Log 2');
    }, [totalTodos]);

    console.log('Log 3');

  const searchedTodos = todos.filter(
    (todo) => { 
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText)
  });

   const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
   };

   const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
   };

   return (
    <AppUI 
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
   )
}

export default App;
