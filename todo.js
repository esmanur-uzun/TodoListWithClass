const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const secondCardBody= document.querySelectorAll(".card-body")[1]
const clearButton = document.querySelector("#clear-todos")


class Todo{
    static addTodo(e){
        const newTodo = todoInput.value.trim();
    
        if(newTodo === ""){
            UI.displayMessage("lütfen bir to do giriniz","danger")
        }
        else{
            
            UI.addTodoToUI(newTodo)
            Storage.addTodoToStorage(newTodo)
        }
    
        e.preventDefault();
    }

    static deleteTodo(e){

        if(e.target.className === "fa fa-remove"){
            UI.deleteTodoFromUI(e.target)
            Storage.deleteFromStorage(e.target.parentElement.parentElement.textContent)
        }
    }

    static clearAllTodos(e){
    if(confirm("Tümünü silmek istiyor musunuz?")){
        UI.clearAllTodosFromUI()
        Storage.clearAllTodosFromStorage()
    }
 }
    
}
const td= new Todo();
td.addTodo();
form.addEventListener("submit",td.addTodo)
function eventListeners(){
    
    document.addEventListener("DOMContentLoaded",function(){
        let todos = Storage.getTodoFromStorage()
        UI.loadAllTodos(todos)
    })
    secondCardBody.addEventListener("click",deleteTodo)
    clearButton.addEventListener("click",clearAllTodos)
}

