const todoList = JSON.parse(localStorage.getItem('todoList')) || [{name:'hi',dueDate:'2003/08/03'}];;
console.log(todoList);
render_todoList()
function render_todoList(){
    let todoListHTML="";
    for (let i=0; i<todoList.length; i++){
        console.log('ji')
        const todoObject=todoList[i];
        const html=`<div>${todoObject.name}</div>
                <div>${todoObject.dueDate}</div>
                <button onclick="
                    todoList.splice(${i},1);
                    render_todoList();
                    saveToLocalStorage();" 
                    class="delete-todo-button">Delete</button>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML=todoListHTML
}


function saveToLocalStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}


function addTodo(){
    const name = document.querySelector('.js-input-name').value;
    const dueDate = document.querySelector('.js-due-date-input').value;
   // console.log(name);
    todoList.push({name,dueDate})
    
    document.querySelector('.js-input-name').value=''
    document.querySelector('.js-due-date-input').value=''

    render_todoList();

    saveToLocalStorage();
    console.log(todoList)
}
