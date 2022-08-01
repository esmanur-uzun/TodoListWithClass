class UI{
    static addTodoToUI(newTodo){
    
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        const todoList = document.querySelector(".list-group")
        link.href= "#";
        link.className="delete-item"
        link.innerHTML= "<i class = 'fa fa-remove'></i>"
        listItem.className="list-group-item d-flex justify-content-between"
    
        listItem.appendChild(document.createTextNode(newTodo))
        listItem.appendChild(link)
        todoList.appendChild(listItem)
    
        todoInput.value= ""
    
    }
    static displayMessage(message,type){
        const cardBody = document.querySelector(".card-body")
    
        const alert = document.createElement("div")
        alert.className=`alert alert-${type}`;
        alert.textContent=message
        cardBody.appendChild(alert)
    
        setTimeout(() => {
            alert.remove()
        }, 1000);
    }
    
    static loadAllTodos(todos){
    
        todos.forEach(todo => {
            this.addTodoToUI(todo)
        })
    
    }
    
    static deleteTodoFromUI(element){
    
        element.parentElement.parentElement.remove()
        this.displayMessage("To do silindi","warning")
    }
    
    static clearAllTodosFromUI(){
        const todoList = document.querySelector(".list-group")
    
        while(todoList.firstElementChild !== null){
            todoList.firstElementChild.remove()
        }
    }
}
