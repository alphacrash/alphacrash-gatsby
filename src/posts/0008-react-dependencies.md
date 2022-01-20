---
title: 'React Dependencies Installation'
date: 2022-01-20 09:00:00
path: '/react-dependencies'
---

1. React add-on libraries

   ```bash
   npm install prop-types react-router-dom react-error-boundary axios lodash
   ```

   OR

   ```bash
   yarn add prop-types react-router-dom react-error-boundary axios
   ```

2. Redux and Saga

   ```bash
   npm install redux react-redux redux-devtools-extension redux-saga
   ```

   OR

   ```bash
   yarn add redux react-redux redux-devtools-extension redux-saga
   ```

3. ESLint (Airbnb Style) and Prettier - Dev Dependencies

   ```bash
   npm install --dev prettier
   npx install-peerdeps --dev eslint-config-airbnb
   ```

   OR

   ```jsx
   yarn add -D prettier
   npx install-peerdeps --dev eslint-config-airbnb
   ```

4. Material UI

    1. Installation
        
        ```jsx
        npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
        ```
        
    2. Configuration inside `<head>` tag in the file `public/index.html`
        1. To use `Roboto` font
            
            ```jsx
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            ```
            
        2. To use font icons
            
            ```jsx
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            ```