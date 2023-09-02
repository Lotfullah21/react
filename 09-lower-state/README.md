for speeding up our application, one of the things we need to consider is the re-rendering part, and that is to not re-render if the value of a state is not changing related to that component.

for instance, if we are combining multiple components inside a parent component and, and state value of the parent container is changing sometimes, but, even though nothing is changing in children components, because of that change in parent state, all components will be re-rendered which causes our application to slow down in large scale application.

There are different methods to mitigate the issue.

#### lower the state

move all the parent logic to a different component, or in another word move the logic that cause unnecessary re-rendering.

```js
import { useState } from "react";
import List from "./List";
const Colleges = () => {
  const [count, setCount] = useState(0);
  const clickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={clickHandle}>count {count}</button>
      <List></List>
    </div>
  );
};
export default Colleges;
```

in the above snippet, Colleges is the parent component for List, setCount is the logic part of the parent, every time counter value changes, it causes the whole component to be re-rendered including List component.
using lowering state, we can move the logic part to the other component and import them from there.

```js
const Counter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}></button>;
};
export default Counter;
```

```js
import { useState } from "react";
import List from "./List";
import Counter from "./Counter";
const Colleges = () => {
  return (
    <div>
      <Counter />
      <List></List>
    </div>
  );
};
export default Colleges;
```
