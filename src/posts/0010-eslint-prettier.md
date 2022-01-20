---
title: 'ESLint and Prettier'
date: 2022-01-20 09:00:00
path: '/eslint-prettier'
---

1. `create-react-app/react-scripts` already has `eslint` dependency included when we created the project for first time. 
    
    So, in `devDependencies` section of `package.json`. We can either:
    
    1. Keep `eslint` version same to that as of present in `create-react-app`
    2. Remove the `eslint` line, lint will work using version present in `creact-react-app`
2. In file `package.json`, add a line to enable ESLint inside `scripts`.
    
    ```jsx
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "lint": "eslint src"
    },
    ```
    
3. Configure ESLint as required for file `eslintrc.json`
    
    ```jsx
    {
      "env": {
        "browser": true,
        "es2021": true
      },
      "extends": [
        "eslint:recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier"
      ],
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
      },
      "plugins": ["react", "jsx-a11y", "prettier"],
      "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      },
      "settings": {
        "react": {
          "version": "detect"
        }
      }
    }
    ```
    
4. Configure rules for Prettier in file `.prettierrc`
    
    ```jsx
    {
    	"bracketSpacing": true,
    	"semi": true,
    	"singleQuote": true,
    	"trailingComma": "none",
    	"printWidth": 80,
    	"tabWidth": 2
    }
    ```
    
5. Ignore files that are not required to be formatted by Prettier by using the file `.prettierignore`
    
    ```jsx
    package.json
    package-lock.json
    yarn.lock
    dist
    node_modules
    ```