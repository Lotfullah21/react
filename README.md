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

`npm create-react-app`: install `create-react-app`.
`npx create-react-app`: install and execute package `create-react-app` to create `react-app` instance.
`npx create-react-app`: install and execute package `create-react-app` to create `react-app` instance.

### Few good commands

`ls`: to know all the directories setting in current directory.
`cd desktop`: change the root to desktop.

## How to create a react app instance

1. `ls`: to know all the directories setting in current directory.
2. `cd desktop`: change the root to desktop.
3. `npx create-react-app app-name`: install and execute package `create-react-app` to create `react-app` instance with the name of `app-name`.
   If the above command gives error.
4. `npx create-react-app@latest app-name`: install and execute package `create-react-app` to create `react-app` instance.

## Files in our app

1. node_modules
   Contains all dependencies required by the app and main dependencies are in package.json.

2. public
   Contains static assets including index.html

3. src
   All of our logics are implemented in this folder, it acts as a brain of our application.
   We do all of our work here.

4. .gitignore
   Specifies which files to be ignored when adding our changes to github.

5. packages.json
   It contains information about our project, for instance list of dependencies, scripts and so on.
   Scripts written in `packages.json` files can be run in our project.

6. packages.json
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

# Vite

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

## Few points about React

- React is a library with lots of helper functions and methods.
- Gives the ability to developers to create re-usable components.
- Minimum re-printing of the elements using another DOM(Document object model) called virtual DOM
- React is declarative in nature, In plain js, we write more of imperative code than declarative.

Plain Javascript, we have to tell, get the id, add event listener to that button once you find and so on.

```js
const Button = document.getElementById("btn");
Button.addEventListener("click", () => {
	console.log("Button Clicked");
});
```

React

```jsx
const handleClick = () => {
	console.log("Button Clicked");
};

return <button onClick={handleClick}>Click Me</button>;
```

## Differences:

#### Vanilla JS:

- You manually query the DOM element (getElementById).
- You explicitly attach event listeners using addEventListener.

#### React:

- The onClick event is passed directly to the Button component as a prop.
- React automatically handles event binding, making code more declarative.

### DOM

It is the document object model which represents our elements in terms of a tree.
Now, lets say we are having a huge application and there is a value attached one of the nodes, now if that particular node's values changes, the entire application have to be re-printed, but in fact we have changed onl one node. That is where the beauty of Virtual DOM comes into play, it says instead of reprinting the entire application, why not just reprint that particular node, and react is heavily using Virtual DOM for printing the components.

React maintains a lightweight representation of the actual DOM called the Virtual DOM. This is a JavaScript object that mirrors the structure of the real DOM.

## Virtual DOM

Concept: React maintains a lightweight representation of the actual DOM called the Virtual DOM. This is a JavaScript object that mirrors the structure of the real DOM.
Efficiency: When changes occur, React updates the Virtual DOM first instead of the real DOM, minimizing direct DOM manipulation. This results in better performance since manipulating the real DOM can be slow and resource-intensive.

## Reconciliation

Diffing Algorithm: When the state of a component changes, React re-renders the component and compares the new Virtual DOM with the previous version. It uses a diffing algorithm to determine the minimal set of changes required.
Batch Updates: React batches updates and applies them to the real DOM in an efficient manner, reducing the number of updates and improving performance.

## Rendering

render() Method: Each React component has a render() method (or function) that returns JSX, which is a syntax extension for JavaScript that resembles HTML. This JSX is converted into React elements that represent the Virtual DOM.
ReactDOM: The ReactDOM library is responsible for rendering React elements into the real DOM. The ReactDOM.render() function is used to mount a React application to a specific DOM element.

Virtual DOM: React uses a Virtual DOM for efficient updates.
Reconciliation: Changes are calculated and applied in a minimal way.
Rendering: Components render JSX, which is transformed into the Virtual DOM.
Direct DOM Manipulation: Use refs when direct manipulation is necessary.
