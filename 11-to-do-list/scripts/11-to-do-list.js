const todoList = [ {name:"make dinner", dueDate:"2025-08-07"},
                   {name:"wash dishes", dueDate:"2025-08-30"} ];
renderTodoList()
function renderTodoList(){
    let todoListHTML = '';
        
    for (let i =0; i<todoList.length; i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate= todoObject.dueDate;
        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div> 
            <button class="delete-todo-button" onclick="todoList.splice(${i},1); renderTodoList()">Delete</button>
        `; // generating HTML
        
        todoListHTML+= html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dueDateElement = document.querySelector('.js-due-date-input');
    console.log(dueDateElement);    
    const name = inputElement.value;
    const dueDate = dueDateElement.value;
    todoList.push({name,dueDate})
    inputElement.value='';
    dueDateElement.value='';

    console.log(todoList);

    renderTodoList();
    
}