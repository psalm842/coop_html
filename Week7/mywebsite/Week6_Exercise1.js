function deleteItem(event) {
    event.target.parentNode.remove();
}

function addTask(event) {
    const ENTER_KEY = 13; // https://www.toptal.com/developers/keycode
    if (event.keyCode != ENTER_KEY) {
        return;
    }
    // Store the task text in a variable
    let task = event.target.value;
    console.log(task);
    // Add the task to the list
    // First create a list item
    let taskListItem = document.createElement("li");
    // Next create a checkbox
    let checkBoxListItem = document.createElement("input");
    checkBoxListItem.type = "checkbox";
    // Create a label for the checkbox
    let labelListItem = document.createElement("label");
    labelListItem.textContent = task;
    // Create a delete button
    let deleteButtonListItem = document.createElement("button");
    deleteButtonListItem.textContent = "Delete";
    deleteButtonListItem.addEventListener("click", deleteItem);
    // Add the items to the DOM 
    taskListItem.appendChild(checkBoxListItem);
    taskListItem.appendChild(labelListItem);
    taskListItem.appendChild(deleteButtonListItem);
    document.getElementById("todo_list").appendChild(taskListItem);
    event.target.value = "";
}

let hide_completed = false;
function hideCompleted() {
    hide_completed = !hide_completed;

    let tasks = document.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        if (hide_completed && tasks[i].firstChild.checked) {
            tasks[i].style.visibility = "hidden";
        } else {
            tasks[i].style.visibility = "visible";
        }
    }
}

function setupEventListeners(event) {
    document.getElementById("todo_input").addEventListener("keypress", addTask);
    document.getElementById("hide_button").addEventListener("click", hideCompleted);
    console.log('Web Page Loaded.');
}

window.addEventListener("load", setupEventListeners);
