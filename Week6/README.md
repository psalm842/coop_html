# Javascript DOMination - Part 3 Continued

## Review

What is HTML?
What is CSS?
What is javascript?

## Explain Week 5 Exercise 2 - A To-Do App

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Week 5 - Exercise 2 - Javascript</title>
        <script src="Week5_Exercise2.js"></script> <!-- Our External Javascript File -->
    </head>
    <body>
        <h1>To-Do App!</h1>
        <!-- The text box where the user will enter the tasks -->
        <input type="text" id="todo_input">
        <!-- A button to toggle hiding/showing of the completed tasks -->
        <button type="button" id="hide_button">Hide/Show Completed</button>
        <!-- An empty unordered list -->
        <ul id="todo_list" style="list-style-type:none">
           <!-- Javascript will fill the list in with <li> tags! -->
        </ul>
    </body>
</html>
```

This is the first thing that happens in the script. Why?
```javascript
window.addEventListener("load", setupEventListeners);
```

`window` is a *global variable* that "magically" exists. You can look up online
what functions (also called methods) are available for window. Online documentation can also tell you about other global variables (e.g. document) that exist as well.

Here we use `addEventListener` and listen for the "load" event, which means that when the page finishes loading, the specified function (`setupEventListeners`) will run.

The next thing that happens is after page loading. `setupEventListeners` adds event listeners to the to-do item input box (for when users put in new to-do items) and the "hide" button (to hide completed to do items)

```javascript
document.getElementById("todo_input").addEventListener("keypress", addTask);
document.getElementById("hide_button").addEventListener("click", hideCompleted);
```

These javascript functions only run *in response* to **user events** (i.e. actions the user takes). 

Let's look at the `addTask` function

```javascript
function addTask(event) {
    /// A constant is a convenient way to represent a fixed number
    const ENTER_KEY = 13; // https://www.toptal.com/developers/keycode
    if (event.keyCode != ENTER_KEY) {
        return; // exit the function, this is called "returning" if it isn't the enter key.
    }
    // Store the task text in a variable
    let task = event.target.value; // event is a piece of data that refers to the event that occurred. target is a part of data the points to the thing that triggered the event. In this case our text box. Value is the value of the text box.
    console.log(task);
    // Add the task to the list - Create 4 html items //
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
    // Every delete button will call the same deleteItem function
    deleteButtonListItem.addEventListener("click", deleteItem);
    // Add the items to the DOM 
    taskListItem.appendChild(checkBoxListItem);
    taskListItem.appendChild(labelListItem);
    taskListItem.appendChild(deleteButtonListItem);
    document.getElementById("todo_list").appendChild(taskListItem);
    // Lastly, clear the text box so it's ready for another to-do!
    event.target.value = "";
}
```

The result of the above is that a list item is added to the list containing 3 elements.
```html
<li>
    <input type=checkbox></input>
    <label>To Do Action</label>
    <button>Delete</button>
</li>
```

```javascript
let hide_completed = false; // create a variable to indicate if completed items should be hidden
function hideCompleted() {
    hide_completed = !hide_completed; // toggles between true/false
    
    // Get a list of all the task items by getting all li tags
    let tasks = document.getElementsByTagName("li");
    // A for loop repeats code until a condition is met
    for (let i = 0; i < tasks.length; i++) {
        // If hide_completed is true AND the checkbox is checked
        if (hide_completed && tasks[i].firstChild.checked) {
            // use the visibility style property to make it visible/invisible
            tasks[i].style.visibility = "hidden";
        } else { // ELSE is in all othe cases make it visible
            tasks[i].style.visibility = "visible";
        }
    }
}
```

Last is deleteItem. Do you see how useful this function is? No matter what the task is, the SAME function is able to be used to delete it.

```javascript
function deleteItem(event) {
    // Remember the delete button is a CHILD of each <li> tag. If you delete the parent, you delete all the children. Here event.target.parentNode is very useful - it always refers to the <li> item of the button that was clicked. event = "click", target=delete button that was clicked, parentNode = the li tag of the delete button that was clicked. 
    // The remove() function deletes a tag and all it's children.
    event.target.parentNode.remove();
}
```

## Challenges

1. Make the delete button for each task red and round it's corners using javascript, then try it with css