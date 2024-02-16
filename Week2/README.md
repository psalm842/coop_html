# Week 2 - Tables, Lists, and Forms 

## Review

Last week we learned a few HTML **tags**.

- What does HTML stand for?
- What is a tag?
- Is HTML a programming language? Why or why not?

There are not a lot of html tags, most of them are simple, a few are quite complex. Today we will cover 3 of the main tags. And we will also see a couple of tag *attributes*

You can look up all the html tags at w3schools (and many other websites)

[HTML Tags](https://www.w3schools.com/tags/ref_byfunc.asp)

### Example job

[Creation.com Job Posting](https://mailing.creation.com/view.html?x=a62e&m=4IlhM&mc=X&s=FDPz4p&u=XLcX&z=N2gydQO&)

### Learn More!

I am teaching you some HTML concepts, there is a lot more to learn. You can practice more here: 

[webtutor.dev](https://webtutor.dev/html/html-introduction)

## Our IDE (Integrated Development Environment), aka Code Editor

This week we will use [vscode.dev](vscode.dev) as our code editor. Go there in your web browser.

## HTML Tags

## Lists

There are 3 types of lists:
1. Unordered Lists
1. Ordered Lists
1. Definition Lists

### Unordered Lists
**Unordered Lists** are lists of items whose order is not important, e.g. a grocery list, or a list of movies you have seen in the past year

The `<ul>` tag stands for "unordered list". It signifies the start of the unordered list. The `</ul>` tag signifies the end of the unordered list.

Inside the `<ul>` tag there are one or more `<li>` tags. `<li>` stands for "list item"

Each item will show up as a bullet point
```html
<h4>Animals I want to see</h4>
<ul>
    <li>Plonkfish</li>
    <li>Bumpy Digtoad</li>
    <li>Toothy Cow</li> 
</ul>
```

<h4>Animals I want to see</h4>
<ul>
    <li>Plonkfish</li>
    <li>Bumpy Digtoad</li>
    <li>Toothy Cow</li> 
</ul>
        

### Ordered Lists
**Ordered Lists** are lists of items whose order is important, e.g. a list of favorite movies, or the tracks on a music album.

The `<ol>` tag stands for "ordered list". It signifies the start of the ordered list. The `</ol>` tag signifies the end of the ordered list.

Inside the `<ol>` tag there are one or more `<li>` tags. `<li>` stands for "list item"

Each item will show up with a number next to it.

```html
<h4>Movies to Watch</h4>
<ol>
    <li>Lord of the Rings</li>
    <li>Star Wars</li>
    <li>The Last Samurai</li>
    <li>The Matrix</li>
</ol>
```

<h4>Movies to Watch</h4>
<ol>
    <li>Lord of the Rings</li>
    <li>Star Wars</li>
    <li>The Last Samurai</li>
    <li>The Matrix</li>
</ol>

### Definition Lists
**Definition Lists** are lists of definitions (surprise!). They are slightly more complicated than the other two types as the defition list is made up of 3 tags.

`<dl>` stands for "definition list" and indicates the start of a list

`<dt>` stands for "defined term" and indicates what term is being defined

`<dd>` stands for definition definition

```html
<h4>Words I Made Up</h4>
<dl>
    <dt>Frabnify</dt>
    <dd>The act of making something frabnicated</dd>
    <dt>Xircun</dt>
    <dd>The name given to a flock of Xirs</dd>
</dl>
```

<h4>Words I Made Up</h4>
<dl>
    <dt>Frabnify</dt>
    <dd>The act of making something frabnicated</dd>
    <dt>Xircun</dt>
    <dd>The name given to a flock of Xirs</dd>
</dl>

## Tables

**Tables** have all kinds of uses and are applied in many places. Such as TV listings, a page of amazon items, etc. Tables are a little more complex to develop since they way they look *rendered* is very different from how the code looks.

The `<table>` tag declares the start of a table.

`<tr>` stands for "table row" and signifies the start of a row of the table

`<th>` stands for "table header", and generally the first row of your table should consist of one or more headers. 

`<td>` stands for table data, and indicates the contents of a cell in the table

Notice I added the `colspan` attribute to one of the `<td>` tags. `colspan` tells a data cell to take up multiple columns. It is an *optional* attribute of the `<td>` tag

`<br>` has nothing to do with tables, it stands for "break". It just starts a new line. Notice you can combine html tags, here I've used a <br> tag inside of a <td> tag.

```html
<h4>My Weekend Plans</h4>
<table>
    <tr>
        <th></th>
        <th>9-12PM</th>
        <th>12-3PM</th>
        <th>3-6PM</th>
    </tr>
    <tr>
        <td>Saturday</td>
        <td>Exercise</td>
        <td>Eat Ice Cream</td>
        <td>Contemplate the belly<br>button of a snickbuzzard</td>
    </tr>
        <td>Sunday</td>
        <td colspan=2>Frabnify my Xirs</td>
        <td>Check the mouse traps to<br>see if they caught lunch</td>
    </tr>
</table>
```

<h4>My Weekend Plans</h4>
<table>
    <tr>
        <th></th>
        <th>9-12PM</th>
        <th>12-3PM</th>
        <th>3-6PM</th>
    </tr>
    <tr>
        <td>Saturday</td>
        <td>Exercise</td>
        <td>Eat Ice Cream</td>
        <td>Contemplate the belly<br>button of a snickbuzzard</td>
    </tr>
        <td>Sunday</td>
        <td colspan=2>Frabnify my Xirs</td>
        <td>Check the mouse traps to<br>see if they caught lunch</td>
    </tr>
</table>


## Forms
A Form element is anything that accepts input from a user. For any substantial website you will use forms. 

Here are some examples of forms:
- Username/password login page
- Checkboxes (subscribe to newsletter)
- Registration form (name/address/etc)

A form begins with a `<form>` tag.

Inside the form tag there must be one or more `<input>` tags. 

The `<input>` tag has a **required** attribute, `type=`. The `type` attribute can be set to any of the following:
- `text` - A single line text box
- `password` - A single line text box, but all characters show up as dots when the users enters typed characters.
- `radio` - A radio button, only one button in a radio button group can be selected at a time
- `checkbox` - A checkbox, similar to a radio, but multiple checkboxes can be selected at once
- `file` - lets the user select a file (looks like a single line text box with a "browse" button next to it)
- `submit` - Creates a button that submits the form to a web server. We won't be covering that in this class. But maybe next semester.

Lastly, for radio buttons you will want to use the `name` attribute as it makes it so that you can only select ONE radio buttons of all the radio buttons that have the same name.

```html
<h4>Places to Go</h4>
<form>
    <input type="checkbox">Italy</input><br/>
    <input type="checkbox">Canada</input><br/>
    <input type="checkbox">Uruguay</input><br>
    <input type="checkbox">Lithia</input>
</form>
```

<h4>Places to Go</h4>
<form>
    <input type="checkbox">Italy</input><br/>
    <input type="checkbox">Canada</input><br/>
    <input type="checkbox">Uruguay</input><br>
    <input type="checkbox">Lithia</input>
</form>


```html
<h4>Vote for Lithian President</h4>
<form>
    <input type="radio" name="vote">Elizabeth Laws</input>
    <br>
    <input type="radio" name="vote">Donald Duck</input>
    <br>
    <input type="radio" name="vote">
        Write-In:
        <input type="text"></input>
    </input>
</form>
```

<h4>Vote for Lithian President</h4>
<form>
    <input type="radio" name="vote">Elizabeth Laws</input>
    <br>
    <input type="radio" name="vote">Donald Duck</input>
    <br>
    <input type="radio" name="vote">
        Write-In:
        <input type="text"></input>
    </input>
</form>