const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-list");
const filterOption = document.querySelector("#filter-todo");

function addTodo(event) {
  event.preventDefault();

  // creating a todo div
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("id", "todo");

  // creating li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.setAttribute("id", "todo-item");

  todoDiv.appendChild(newTodo);

  // creating check mark button
  const checkMarkButton = document.createElement("button");
  checkMarkButton.setAttribute("id", "check-btn");
  checkMarkButton.innerHTML = `<i class="fas fa-check"></i>`;

  todoDiv.appendChild(checkMarkButton);

  // creating trash button
  const trashButton = document.createElement("button");
  trashButton.setAttribute("id", "trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;

  todoDiv.appendChild(trashButton);

  // append to list
  todoList.appendChild(todoDiv);

  // clearing todo input value
  todoInput.value = "";
}

todoButton.addEventListener("click", addTodo);

function deleteTodo(e) {
  const item = e.target;

  if (item.id === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.id === "check-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

todoList.addEventListener("click", deleteTodo);

function filterTodo(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

filterOption.addEventListener("click", filterTodo);
