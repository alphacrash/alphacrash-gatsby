---
title: 'Build React: Review Basics'
date: 2021-08-21 09:00:00
path: '/build-react-0'
---

Code Pen - [Build React - Step 0 - Review](https://codepen.io/amthesud/pen/JjJPMBY)

## Basics

Let's go through the flow to have a good idea of how React, JSX and DOM elements work.

Just three lines of Code

```
const element = <h1 title="foo">Hello</h1>          // Defines a React element
const container = document.getElementById("root")   // Gets node from DOM
ReactDOM.render(element, container)                 // Renders React element in container
```

The first line, element - it's JSX. Not a valid javascript.
We need to transform it to valid JS, which can be done with tools like Babel.

### Transformation

It's usually simple: 
* replace the code inside the tags with a call to `createElement`, 
* pass the tag name, props and children as parameters.

#### Before transformation

```
const element = <h1 title="foo">Hello</h1>
```

#### After transformation

```
const element = React.createElement(
    "h1",
    { title: "foo" },
    "Hello"
)
```

### Element

`React.createElement` creates an object from it's arguments.
We can replace function call with it's output.

What is an element?

- Object has two properties (it has more, but we care about these two)
    * Type
    * Props

```
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}
```

* *type* - string that specifies the type of DOM node we want to create, it's the `tagName` we pass to `document.createElement` when creating HTML element.

* *props* - an object, with keys and values from JSX attributes. It has special property: `children`

* *children* - In our example, it's a string, but it's usually an array with more elements.


### Render

`render` is where React changes DOM, so let's do updates ourselves.

#### Current State

```
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}

const container = document.getElementById("root")
ReactDOM.render(element, container)
```

#### Updates

1. Create node using element `type`, in our case `h1`

    ```
    const node = document.createElement(element.type)
    node["title"] = element.props.title
    ```

2. Assign all element `props` to that node

    Create Nodes for children. Since we have a string as child, we will create a text node

    ```
    const text = document.createTextNode("")
    text["nodeValue"] = element.props.children
    ```

    Note: 
    * Using `textNode` instead of `innerText` will allow us to treat all elements in same way later.
    * Note how `nodeValue` is set like `h1` title. It's almost as if string had `props: {nodeValue: "hello"}`

3. Finally append the `textNode` to `h1` and then `h1` to `container`

    ```
    node.appendChild(text)
    container.appendChild(node)
    ```

### Final Product

```
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}

const container = document.getElementById("root")

const node = document.createElement(element.type)
node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children

node.appendChild(text)
container.appendChild(node)
```

--------------------------------

Original Post written by 
Rodrigo Pombo: https://pomb.us/build-your-own-react/

[I'm writing these post for my learning and documentation.](https://uwaterloo.ca/centre-for-teaching-excellence/teaching-resources/teaching-tips/developing-assignments/cross-discipline-skills/using-writing-learning-tool)

--------------------------------