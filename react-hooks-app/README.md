- in react state changes are usually triggered through the act of a user interacting with the app.
- these includes mouse click, button click, mouseover.

```js
const Button = () => {
  const [labName, setLabName] = useState("Hoshmand");
  const handleClick = () => {
    console.log("HELLO");
    setLabName("Dhi");
  };
  return (
    <>
      <h3>{labName}</h3>
      <button onClick={handleClick}>change the name</button>
    </>
  );
};
export default Button;
```

calling handleClick function trigger setLab state function, and thus changed the name of the lab.

### Destructuring Objects using useState.

##### Inefficient Way

Here, just because of one state change, we are updating the whole state object,which is inefficient.

```js
import { useState } from "react";

const ObjectDestructuring = () => {
  const [subjects, setSubjects] = useState({
    name: "Web Development",
    courses: 4,
  });
  console.log(subjects);
  const handleClick = () => {
    setSubjects({
      name: "Artificial Intelligence , Deep learning",
      courses: 4,
    });
  };
  return (
    <>
      <h3>Subject Name: {subjects.name}</h3>
      <h3>Number of courses: {subjects.courses}</h3>
      <button onClick={handleClick}>Change Subject</button>
    </>
  );
};
export default ObjectDestructuring;
```

export default ObjectDestructuring;

##### Efficient Way

if we want to change some of the state object,we do not need to update the state object,use spread operator which copies an object and change only the ones that you are going to change using state update function.

```js
import { useState } from "react";

const ObjectDestructuring = () => {
  const [subjects, setSubjects] = useState({
    name: "Web Development",
    courses: 4,
  });
  console.log(subjects);
  const handleClick = () => {
    setSubjects({
      ...subjects,
      name: "Artificial Intelligence , Deep learning",
      courses: 4,
    });
  };
  return (
    <>
      <h3>Subject Name: {subjects.name}</h3>
      <h3>Number of courses: {subjects.courses}</h3>
      <button onClick={handleClick}>Change Subject</button>
    </>
  );
};
export default ObjectDestructuring;
```
