## React

React is a javascript library for building user interfaces.

## Steps

### Node

- It provides the environment to run your JavaScript code outside of a browser.

1. Install node to be able to create a react app instance, (Download the LTS version)
2. To know if it is installed or already there, run `node --version`

### NPM

It allows us to install external packages.

`create-react-app` is a package.

- `npm create-react-app`: install `create-react-app`.
- `npx create-react-app`: install and execute package `create-react-app` to create `react-app` instance.

### Few good commands

- `ls`: to know all the directories setting in current directory.
- `mkdir dir-nama`: create a directory.
- `cd desktop`: change the directory to desktop.

## How to create a react app instance

1. `ls`: to know all the directories setting in current directory.
2. `cd desktop`: change the directory to desktop.
3. `npx create-react-app app-name`: install and execute package, `create-react-app` to create a `react-app` instance with the name of `app-name`.
   If the above command gives error, ues the following command instead
4. `npx create-react-app@latest app-name`: install and execute package `create-react-app` to create `react-app` instance.

## Files in our react app

1. node_modules Contains all dependencies required by the app and main dependencies are in package.json.

2. public Contains static assets including index.html

3. src contains all of our logics and those are implemented in this folder, it acts as a brain of our application.
   We do all of our work here.

4. .gitignore specifies which files to be ignored when adding our changes to github, crucially important to hide the important information like secret keys.

5. packages.json
   It contains information about our project, for instance list of dependencies, scripts and so on.
   Scripts written in `packages.json` are files that can be run in our project.
   It is a snap shot of the main dependencies in our project.

## Starting the application

1. `npm start`: It starts the development server on our local machine (computer).
2. `CTRL+C stops the server.`

## Few good extensions to have

1. prettier
2. emmet
3. ES7+ React/Redux/React-Native snippets
   When we try to create a component, easily we can write by using the given commands
   `rafce` (arrow func with export, the name will be same as the file name)
   `rfce` (regular func with export, the name will be same as the file name)

## How to deploy an application

Write the following commands to make our application deploy ready.

1. "CTRL + c " to stop the server
2. `npm run build`

## Vite

Vite is a build tool and development server for modern web projects, including those using React. It’s designed to provide a faster and more efficient development experience compared to traditional bundlers like Webpack.

To create react app using vite, run the given command.

```js
 npm create vite@latest react-app -- --template react
 cd react-app
 npm install

```

## To start the development environment

```script
npm run dev
```

### Differences

- One of the major difference is that all the files with `.js` extension will be converted to `.jsx` extension.
- `index.html` sits in the root instead of the `public folder`.
