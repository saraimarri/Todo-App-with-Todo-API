const newTodoInput= document.querySelector("new-todo");
const addTodoBtn = document.querySelector("new-todo-btn");



function loadTodos() {
fetch("http://localhost:3000/todos")
.then((res)=> res.json())
.then(todos => {
console.log(todos);
});
}


loadTodos();