class Storage{
    static addTodoToStorage(newTodo){
        let todos = this.getTodoFromStorage();
    
        todos.push(newTodo)
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    
    static getTodoFromStorage(){
        let todos;
    
        if(localStorage.getItem("todos") === null){
            todos= [];
        }
        else{
            todos= JSON.parse(localStorage.getItem("todos"))
        }
        return todos;
    }
    
    static deleteFromStorage(deleteTodo){
        let todos = this.getTodoFromStorage()
    
        todos.forEach((todo,index) =>{
            if(todo === deleteTodo){
                todos.splice(index,1)
                return;
            }
        })
        localStorage.removeItem("todos");
        localStorage.setItem("todos",JSON.stringify(todos));
    }
    
    static clearAllTodosFromStorage(){
        localStorage.removeItem("todos");
    }
}

