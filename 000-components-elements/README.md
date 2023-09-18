## React Declarative model

## JSX

a syntax extension to JavaScript (JS).
React uses JSX to describer the UI appearance.
using JSX we can combine both markup (html) and logic.
combination of Markup and logic creates a component.
our entire UI is represented by tree of components.
when React render our page, it creates a mediatory representation.
the representation is also a tree, but each node here, instead of a JSX, it is plain JavaScript object, describing what the JSX is about.
this plain object is an element

### Element

an element is a way to represent final HTML output as a plain object.
it consist of primarily two attributes, type and props.

#### Type:

it defines the type of node, such as a button,anchor tags, or img

#### Props

it encompasses all properties and classes received in button, like className, type,

so, at the end all elements are plain JS object, not a DOM.
plain objects are easy to traverse and access to the elements.
React would identify a component as a function and ask that component what element it renders to, with the given props.
React keep digging until get to the end of tree elements and at the end will convert them to DOM elements which is known as Virtual DOM.
each node in the tree is just a plain javascript object.

## Children Prop:

In JSX expressions, the content between an opening and closing tag is passed as a unique prop called children.
'<h1>Hello</h1>', 'Hello' is a children, a simple string.</h1>

we can provide JSX elements as children to display the nested component.

<Message>
<Title></Title>
<Content></Content>
</Message>

In React, the children prop is a special prop that is automatically passed to a component and represents the content that is placed between the opening and closing tags of that component in JSX. It allows you to render and manipulate the content that is nested within a component.

```js


function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

OR

function Card({children}){
    return (
        <div className="card">
            {children}
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <Card>
        <h2>Hello, World!</h2>
        <p>This is a card component with children.</p>
      </Card>
    </div>
  );
}

```

Both props.children and {children} serve the same purpose of accessing and rendering the content passed as children to a component. The choice of whether to use one or the other is a matter of coding style and preference. Using {children} with destructuring is often favored for its brevity and clarity, but the functionality is the same as using props.children.

In this example, the Card component takes advantage of the children prop to render whatever content is placed within its tags when used in the App component. In this case, the content between the <Card> and </Card> tags (the <h2></h2> and <p> elements) is passed as props.children to the Card component, and it gets rendered within the <div className="card"> element.

This feature is particularly useful when you want to create reusable components that can wrap and display arbitrary content. Components like modals, tooltips, and custom layout components often utilize the children prop to allow customization of their inner content while maintaining a consistent outer structure.

## Component composition

two main features that allows component composition

- 1. containment: it refers to the components that do not know their children ahead of time.
- In the context of programming and software development, "containment" generally refers to the practice of encapsulating or enclosing something within a specific scope,
  "containment" often refers to the practice of wrapping or encapsulating one component within another. For example, you might have a parent component that contains one or more child components.
- 2. specialization: it refers to a component that is designed for a specific purpose to be used as a child for parent component.
- components being special case of other components.

Containment and specialization in React components help you create a modular and maintainable codebase by breaking down complex UIs into smaller, reusable parts and defining clear boundaries between different parts of your application. This approach enhances code readability, reusability, and maintainability.

#### Fragments

it is a component that lets us to wrap our element without adding extra node to the component.

```js
return (
  <React.Fragment>
    <li>React</li>
    <li>HTML</li> {" "}
  </React.Fragment>
);

OR;

return (
  <>
    <li>React</li>
    <li>HTML</li> {" "}
  </>
);
```

## Top level API's for children manipulation

#### react.cloneElement()

it clones and return a new copy of the element.
react.cloneElement() is a utility function provided by the React JavaScript library for creating a new React element that is a clone of an existing element, with the ability to modify its properties. This function is commonly used when you want to wrap or enhance an existing React element while preserving its original props.

IT

- Modifies children properties.
- Add to children properties.
- Extend functionality of children.

```js
React.cloneElement(element, [props], [...children]);
```

- element: the React element you want to clone
- props(optional): an object containing the new props to be added to the cloned element.
- children(optional): any additional children elements to be included in in the cloned element.

### React.children.map()

React.Children.map(children, function (child, index) { /_... _/ }): This function is used to map over the children of a React component and apply a function to each child element. It returns an array of modified children.

```js
const originalArray = [1, 2, 3, 4, 5];

// Using map to create a new array
const newArray = originalArray.map((element) => element * 2);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [2, 4, 6, 8, 10]
```
