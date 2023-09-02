our main point in this lesson is to optimize our application, in fact we don't want our component to be re-rendered unnecessary.
in the snippet below, every time we re-render our app, this function would be created from scratch every time state get updated, which we don't to happen.

```js
const removeCollege = (id) => {
  const newCollege = data.filter((college) => college.id !== id);
  setData(newCollege);
};
```

```js
import { useState } from "react";
import List from "./List";
import Counter from "./Counter";
import universities from "../data/Data";
const Colleges = () => {
  const [data, setData] = useState(universities);
  // function that causes re-rendering.
  const removeCollege = (id) => {
    const newCollege = data.filter((college) => college.id !== id);
    setData(newCollege);
  };
  return (
    <div>
      <Counter></Counter>
      <List colleges={data} removeCollege={removeCollege}></List>
    </div>
  );
};
export default Colleges;
```

what is the solution ?
useCallback hook to the rescue.

### what is useCallback hook?

In React, the useCallback hook is used to memoize functions, which can be particularly useful for optimizing performance in your components. It memoizes a function so that it doesn't get recreated on every render unless its dependencies change. This can help prevent unnecessary re-renders of child components or avoid unnecessary computations in your application.
it takes two arguments, first one is the function to be memoized and the 2nd one is a dependency array which dictates the callback when to re-create the function from scratch.
it is important to add, otherwise the functionality will no work properly.
if dependency array is empty, the function will be re-created only once.

```js
import { useState, useCallback } from "react";
import List from "./List";
import Counter from "./Counter";
import universities from "../data/Data";
const Colleges = () => {
  const [data, setData] = useState(universities);
  //

  const removeCollege = useCallback((id) => {
    console.log(data);
    const newCollege = data.filter((college) => college.id !== id);
    setData(newCollege);
  }, []);

  return (
    <div>
      <Counter></Counter>
      <List colleges={data} removeCollege={removeCollege}></List>
    </div>
  );
};
export default Colleges;
```

We use the useCallback hook to memoize the removeCollege function. The second argument to useCallback is an array of dependencies. In this case, we specify [data] as the dependency array, which means that the removeCollege function will only be recreated if the data state changes.
By memoizing the removeCollege function with useCallback, we ensure that it retains the same reference between renders as long as its dependencies (data in this case) remain the same. This can help optimize performance because child components or effects that rely on this function won't be affected by unnecessary function recreations.

Common use cases for useCallback include:

Preventing unnecessary renders of memoized components (e.g., using React.memo).
Avoiding infinite loops in useEffect dependencies by memoizing functions used as effect callbacks.
Optimizing performance when passing callback props to child components.
Keep in mind that while useCallback can be helpful for performance optimization, it's important not to overuse it. Only memoize functions when you have a specific performance concern, as it can make your code harder to read and understand if used excessively.
