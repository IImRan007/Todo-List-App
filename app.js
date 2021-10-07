const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-list");

function addTodo(event) {
  event.preventDefault();
  console.log("clicked");
}

todoButton.addEventListener("click", addTodo);
