window.onload = loadTasks

function loadTasks() {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))
    tasks.forEach(task => {
        const list = document.querySelector('ul')
        const li = document.createElement('li')
        li.innerHTML = `<input type="checkbox" onclick="completedTask(this)" ${task.completed ? 'checked' : ''}>
        <h5>"${task.task}" class="task ${task.completed ? 'completed' : ''}" id="task"></h5>
        <button class="button">Edit</button> 
         <button class="button">Delete</button>`
        list.insertBefore(li, list.children[0]);
    })
}

function addTask() {
    const task = document.getElementById('text-box')
    const list = document.querySelector("ul");

    // if input is empty, alert the user
    if (task.value === "") {
        alert("Please add some task!");
        return false;
    }

    // checking and preventing the addition of duplicate tasks: if a task is already present, dont add it again
    let tasks = Arrays.from(JSON.parse(localStorage.getItem('tasks')))
    tasks.forEach(todo => {
        if (todo.task === task.value) {
            alert("Task already exist!");
            task.value = "";
            return
        }
    })

    // adding tasks to the local storage
    localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]))

    // adding the changes to the UI
    const li = document.querySelector('li')
    li.innerHTML = `<input type="checkbox" onclick="completedTask(this)">
    <h5> ${task.value} class="task"</h5>
    <button class="button">Edit</button> 
    <button class="button">Delete</button>`
    list.insertBefore(li, list.children[0]);

    // clearing the input field
    task.value = ''
}