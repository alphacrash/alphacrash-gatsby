# createElement

We will replace React code with our own version of React.

Let's transform JSX to JS so we can see `createElement` calls.

JSX:
```
const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
)
const container = document.getElementById("root")
ReactDOM.render(element, container)
```

Converted to JS:
```
const element = React.createElement(
    "div",
    { id: "foo" },
    React.createElement("a", null, "bar"),
    React.createElement("b")
)
const container = document.getElementById("root")
ReactDOM.render(element, container)
```

Element is an object with `type` and `props`.
The only thing that our function needs to do is create that object.

We use the spread operator for the `props` and the rest parameter syntax for the `children`, this way the `children` prop will always be an array.

### Function

```
function createElement(type, props, ...children) {
    return (
        type,
        props: {
            ...props,
            children,
        }
    )
}
```

Examples
```
// For example, createElement("div") returns:

{
  "type": "div",
  "props": { "children": [] }
}

// createElement("div", null, a) returns:

{
  "type": "div",
  "props": { "children": [a] }
}

// and createElement("div", null, a, b) returns:

{
  "type": "div",
  "props": { "children": [a, b] }
}
```

The `children` array could also contain primitive values like strings or numbers.
So we'll wrap everything that isn't an object inside its own element and create a special type for them: `TEXT_ELEMENT`

React doesn't wrap primitive values or create empty arrays when there aren't `children`,
but we do it because it will simplify our code, and for our library we prefer simple code than performant code.

So, now the code

```
function createElement(type, props, ...children) {
    return (
        type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === "object"
                ? child
                : createTextElement(child)
            ),
        },
    )
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    }
}

const Didact = {
    createElement,
}

/** @jsx Didact.createElement */
const element = Didact.createElement(
    <div>
        <a>bar</a>
        <b />
    </div>
)
const container = document.getElementById("root")
ReactDOM.render(element, container)

```

--------------------------------

Original Post written by 
Rodrigo Pombo: https://pomb.us/build-your-own-react/

[I'm writing these post for my learning and documentation.](https://uwaterloo.ca/centre-for-teaching-excellence/teaching-resources/teaching-tips/developing-assignments/cross-discipline-skills/using-writing-learning-tool)

--------------------------------