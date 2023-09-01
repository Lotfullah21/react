## Prop Drilling

```js
import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "Ahmad" });
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h4>HoshmandLab</h4>
      <NavLinks user={user} logout={logout}></NavLinks>
    </nav>
  );
};
export default Navbar;
```

```js
import UserContainer from "./UserContainer";
const NavLinks = ({ user, logout }) => {
  return (
    <>
      <div className="links-container">
        <ul className="links">
          <li>
            {" "}
            <a href="#">home</a>
          </li>
          <li>
            {" "}
            <a href="#">about</a>
          </li>
          <li>
            {" "}
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
      <UserContainer user={user} logout={logout}></UserContainer>
    </>
  );
};
export default NavLinks;
```

````js
const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          {" "}
          <h4>Hello {user?.name}</h4>
          <button onClick={logout} className="btn">
            logout
          </button>
        </>
      ) : (
        <h5>please login</h5>
      )}
    </div>
  );
};
export default UserContainer;
s```
````

## Context API

context API is a way to manage and share states across different components without passing them manually to each component.
It's particularly useful for sharing data like global application state, user authentication, themes, and other settings without having to manually pass props down through multiple levels of the component tree.

#### Steps to create a context API

- 1. Create Context:
     use <code>createContext</code> which is function that returns an object with two components: 'Provider' and 'Consumer'.

```js
import { createContext } from "react";
const MyContext = createContext();
```

- 2. Create Provider component
     create Provider that will act as the provider of the context where you want put the data to be shared.
     why children?
     - In React, "children" refers to a special prop that is automatically passed to components and represents the content or nested elements placed within the opening and closing tags of a component when it is used in JSX. Essentially, "children" allows you to include and render content or components within other components.

```js
function MyComponent(props) {
  return <div>{props.children}</div>;
}
```

```js
<MyComponent>
  <p>This is some content inside MyComponent.</p>
</MyComponent>
```

<p> is the children here.
So, WHY CHILDREN.
this allow the rendering of components that are wrapped by the provider
This is how we make the context data available to those child components.
The children prop ensures that the child components within the MyProvider component's scope have access to the context data.
The children prop typically represents the component or components that are nested within the provider component's JSX.

```js
import React, { useState } from "react";

function MyProvider({ children }) {
  // Define the state or data you want to share
  const Info = () => {
    message: "Hello, I am from Context";
  };

  return <MyContext.Provider value={{ Info }}>{children}</MyContext.Provider>;
}
```

- 3. Use Provider in the App.
     Provider should be placed in an environment that all other components could be wrapped within the Provider so that they can have access to the context data.

```js
function App() {
  return (
    <div>
      <MyProvider>
        {/* Components that can access the context */}
        <MyComponent></MyComponent>
      </MyProvider>
    </div>
  );
}
Now, 'MyComponent' have access to all the context data inside 'MyProvider'
```

- 4. Consume the Context data
     in the component we want to consume the context, we can use <code>useContext</code> hook to use the context data.

```js
import React, { useContext } from "react";
import MyContext from "./MyContext"; // Import the context object

function MyComponent() {
  const { Info } = useContext(MyContext); // Access the context data

  return (
    <div>
      <h1>{Info.message}</h1>
    </div>
  );
}
```

```js

```
