# Week 1 - Introduction to Web Development

## What is Web Development?

Web development is a very broad topic and I won't go into all the aspects of it, but the one we will concern ourselves with in this class is the art of creating websites that people will view through a web browser.

Web development is a huge topic that can take a lifetime to understand
It is a fast moving field as the web is constantly evolving, but at it's root it is based code.

A web browser is really nothing more than a code interpreter. We'll explore this more later.

There are 3 major languages in Web Development, all the rest build on these 3

1) **HTML** - HyperText Markup Language
  - HTML describes the content and structure of the web page
2) **CSS** - Cascading Style Sheets
  - CSS describes the formatting of the web page (color, fonts, spacing, anything else you can imagine)
3) **Javascript**
  - Javascript in smarts in websites, and is used to add interactive features

HTML and CSS are **not** programming languages they are both markup languages

### What is a markup language? 
It is a document where the content, structure, and/or formatting is all defined textually in the document.

#### Demo
- Go to apple.com
- To access developer tools go to tools->Developer tools in your browser
- It will show the HTML for the website
- Change some of the text - What happens?
- Refresh the page - What happens? Why?

## How the internet works
1. A web browser is nothing more than a program that reads html, css, and javascript and executes them.
1. You open your web browser and navigate to a website.
1. The web browser requests the html, css, and javascript from a server (another computer somewhere)
1. It receives this content and renders it for you to see.

## Exercise - Get Visual Studio

https://code.visualstudio.com

Download and install the right version for your operating system (Windows, Linux, Mac)

## Exercise 2 - Creating your first web page

- Open a new file in visual studio, save it as index.html
- Enter the following code 
```html
<html>
    <head>
        <title>My First Web Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
```
