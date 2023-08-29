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
