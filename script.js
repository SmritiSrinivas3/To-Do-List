const task = document.getElementById('text-box').value
const content_space = document.getElementById('content')

function addTask(){
    if(task.trim() == '' || task.trim() == null){
        return false
    }else{
       let list = document.createElement('li')
       let deleteButton = document.createElement('button')
       let editButton = document.createElement("button");
       list.appendChild(document.createTextNode(task))
       list.appendChild(deleteButton);
       list.appendChild(editButton);
       content_space.appendChild(list)
       
    }
} 