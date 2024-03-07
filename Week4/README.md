# Week 4 - Javascript DOMination - Part 1

## Review of CSS

- CSS stands for Cascading Style Sheets
- CSS styles html so it looks appealing
- CSS can be defined in the `<head>` of the document, inline with the `style` attribute of an html tag, or in a separate css file. For most websites css is stored in a separate file.

## Javascript

- Javascript is the programming language of the internet. Unlike html and css it IS a programming language, not a markup language. It is a set of instructions about how to change the webpage.

- Javascript changes HTML
    - html is static, i.e. it doesn't change
    - Javascript lets us make html dynamic
    - You can do almost anything you can imagine - when you click a button make an `<h1>` element become `<h2>` or change attributes of an existing tag or add new tags or remove tags, etc.

- Javascript makes web pages interactive, it's what allows them to respond to user input (mouse clicks, keyboard input)

- With Javascript you can DOMinate HTML!

### What is the DOM?

- DOM stands for Document Object Model, this is the technical name for the structure of the html code. We won't go into it much here yet, but it is a very common term to see and you can just translate it to "html code" in your mind for now. 

- Javascript searches the DOM for tags that match a selector (like css), but then can delete, modify, or add tags and their attributes.

### Adding Javascript to your webpage

- Javascript can be added in several ways, similar to css
    1. In the `<head>` of the html document using the `<script>` tag (similar to css's `<style>` tag)
    1. In the `<body>` of the html document 
    1. A separate *.js file, use a `<script src=filename.js>` tag in the html document to allow the html document to use the javascript file
    
## The very basics of javascript

### Variables

you can declare a variable with the `let` keyword

```javascript
let count = 0;
```
The above code creates a variable named count and sets its initial value to 0

### Functions

A function is declared with the `function` keyword

```javascript
function increment()
{
    count = count + 1;
}
```

The above code creates a *function* named **increment**.

A function is a piece of reusable code. Anywhere the function name is called the set of instructions contained in the `{}` is executed.

Here we named our function, `increment`; we can name the function anything we want. This is just so we can identify our function and what it does easily in the code.

The line `count = count + 1` means "add 1 to the variable count and then assign that to count as its new value"

### Callbacks/Event Listeners

Callbacks or event listeners are *functions* that that execute in response to an event. One of the most common events is a button click. Typically you will want the web page to take some action when the user clicks a button.

There are TWO ways callbacks can be set.

#### Inline

```html
<button type="button" 
    onclick="document.getElementById('date').innerHTML=Date()">

    Show date and Time

</button>
```

#### Using the *addEventListener* javascript function

```html
 <button type="button" id="date_button"> 

    Show date and Time

</button>   
<script type="text/javascript">
    document.getElementById("date_button").addEventListener(
        "click",
        {document.getElementById('date').innerHTML=Date()}
    )
</script>
```

