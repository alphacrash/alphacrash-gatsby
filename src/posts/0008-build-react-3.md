---
title: 'Build React 3: Concurrent Mode'
date: 2021-08-23 09:00:00
path: '/build-react-3'
---

Before we start adding more code we need a refactor.

```
element.props.children.forEach(child => 
    render(child, dom)
)
```

There's a problem with this recursive call.

Once we start rendering, we won't stop until we have rendered the complete element tree.
If the element tree is big, it may block the main thread for too long.
And if the browser needs to do high priority stuff like handling user input or keeping an animation smooth, it will have to wait until the render finishes.

So we are going to break the work into small units,
and after we finish each unit we'll let the browser interrupt the rendering if there's anything that needs to be done.

We use `requestIdleCallback` to make a loop. You can think of `requestIdleCallback` as a `setTimeout`, but instead of us telling it when to run, the browser will run the callback when the main thread is idle.

React doesn't use `requestIdleCallback` anymore.
Now it uses the [scheduler package](https://github.com/facebook/react/tree/main/packages/scheduler). But for this use case, it's conceptually the same.

```
let nextUnitOfWork = null
​
function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
}
​
requestIdleCallback(workLoop)
​
function performUnitOfWork(nextUnitOfWork) {
  // TODO
}
```

`requestIdleCallback` also gives us a deadline parameter. We can use it to check how much time we have until the browser needs to take control again.

To start using the loop we’ll need to set the first unit of work, and then write a performUnitOfWork function that not only performs the work but also returns the next unit of work.
