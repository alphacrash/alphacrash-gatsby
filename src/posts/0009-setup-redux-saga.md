---
title: 'Setup of Redux Saga'
date: 2022-01-20 09:00:00
path: '/setup-saga'
---

1. Create folder `store` inside `src` and a corresponding `index.js`.
2. Create the following files/folders inside :
    1. `src/reducers/rootReducer.js`
        
        ```jsx
        const { combineReducers } = require("redux");
        
        const rootReducer = combineReducers({
          entries: () => [],
        });
        
        export default rootReducer;
        ```
        
    2. `src/actions`
    3. `src/sagas/rootSaga.js`
        
        ```jsx
        **export default function* rootSaga() {}**
        ```
        
    4. `src/store.js`
        
        ```jsx
        import { applyMiddleware, createStore } from "redux";
        import { composeWithDevTools } from "redux-devtools-extension";
        import createSagaMiddleware from "redux-saga";
        
        import rootReducer from "./reducers/rootReducer";
        import rootSaga from "./sagas/rootSaga";
        
        const sagaMiddleware = createSagaMiddleware();
        const middlewares = [sagaMiddleware];
        
        const store = createStore(
          rootReducer,
          composeWithDevTools(applyMiddleware(...middlewares))
        );
        
        sagaMiddleware.run(rootSaga);
        
        export default store;
        ```
        
    5. `src/index.js`
        
        ```jsx
        import React from "react";
        import ReactDOM from "react-dom";
        import { Provider } from "react-redux";
        
        import App from "./App";
        import store from "./store";
        
        ReactDOM.render(
          <React.StrictMode>
            <Provider store={store}>
              <App />
            </Provider>
          </React.StrictMode>,
          document.getElementById("root")
        );
        ```