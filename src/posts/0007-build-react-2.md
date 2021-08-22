---
title: 'Build React 2: render'
date: 2021-08-23 09:00:00
path: '/build-react-2'
---

Code Pen - [Build React - Step 2 - Render](https://codepen.io/amthesud/pen/gORYdWm)

Let's write our version of `ReactDOM.render` function.

For now, we only care about adding stuff to the DOM.
We'll handle updating and deleting later.

We start by creating the DOM node using the element type, and then append the new node to the container.

Code:

```
function render(element, container) {
    const dom = document.createElement(element.type)

    container.appendChild(dom)
}
```

We recursively do the same for each child


```
function render(element, container) {
    const dom = document.createElement(element.type)

    element.props.children.forEach(child => 
        render(child, dom)
    )

    container.appendChild(dom)
}
```

We also need to handle text elements, if element's type is TEXT_ELEMENT, we create a text node instead.


```
function render(element, container) {
    const dom = 
        element.type == "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type)

    element.props.children.forEach(child => 
        render(child, dom)
    )

    container.appendChild(dom)
}
```

Lastly, we need to assign element props to node.

```
function render(element, container) {
    const dom = 
        element.type == "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type)

    const isProperty = key => key !== "children"
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = element.props[name]
        })

    element.props.children.forEach(child => 
        render(child, dom)
    )

    container.appendChild(dom)
}
```

--------------------------------

Original Post written by 
Rodrigo Pombo: https://pomb.us/build-your-own-react/

[I'm writing these post for my learning and documentation.](https://uwaterloo.ca/centre-for-teaching-excellence/teaching-resources/teaching-tips/developing-assignments/cross-discipline-skills/using-writing-learning-tool)

--------------------------------