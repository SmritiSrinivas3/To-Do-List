const content_space = document.getElementById('content')


function addTask() {
    let task = document.getElementById('text-box').value
    if (task.trim() == '' || task.trim() == null) {
        return false
    } else {
        let uList = document.createElement('ul')
        let list = document.createElement('li')
        let deleteButton = document.createElement('button')
        deleteButton.className = 'delete'
        let editButton = document.createElement("button");
        editButton.className = 'edit'
        list.appendChild(document.createTextNode(task))
        list.appendChild(deleteButton);
        deleteButton.appendChild(document.createTextNode("Delete"));
        list.appendChild(editButton);
        editButton.appendChild(document.createTextNode("Edit"));
        content_space.appendChild(list)
        content_space.appendChild(uList)
    }
}

function removeItem(e){
    e.preventDefault()
if(e.target.classList.contains(('delete'))){
    let li = e.target.parentNode;
    items.removeChild(li);
    
}
}
