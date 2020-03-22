import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender Javascript!!!');
// todoList.nuevoTodo(tarea);

// console.log(todoList);
// crearTodoHtml(tarea);


// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {

//     localStorage.removeItem('mi-key');

// }, 1500);

todoList.todos.forEach(todo => {
    crearTodoHtml(todo);
});

console.log('todos', todoList.todos);