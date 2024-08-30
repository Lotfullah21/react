### OPtional Chaining

### and operator (&&)

```js
const x = { name: "ahmad" };

const nameValue = x && x.name; //ahmad
console.log(nameValue);
//it says, check if x is exist, if exists, return the value that is to the right hand side of &&
const undefinedValue = y && x.name;
console.log(undefinedValue); // undefined
// Since, y does not exist, it evaluates to false and returns undefined.
```

```js
const {
  labName,
  courses: {
    ml,
    dl,
    web: { front_end, back_end },
  },
  w,
} = lab;
const frontEnd =
  lab && lab.courses && lab.courses.web && lab.courses.web.front_end;
```

it returns the value of the right hand side of && if the value of the very left hand side is true.
it returns undefined if the left hand side of the operator evaluates to false, or in other words, the left hand side value does not exist.
one of the main usage of this operator along optional chaining is it does not break our code, if one of the operator evaluates to false and does not render anything.

other wise, we would getting the error of "cannot read properties of undefined."

#### Destructuring

```js
const OptionalChaining = () => {
  const lab = {
    labName: "Hoshmand",
    courses: {
      ml: "machine learning",
      dl: "deep learning",
      web: {
        front_end: "React",
        back_end: "Django",
      },
    },
  };

  const {
    labName,
    courses: {
      ml,
      dl,
      web: { front_end, back_end },
    },
    w,
  } = lab;
  const frontEnd =
    lab && lab.courses && lab.courses.web && lab.courses.web.front_end;
  return (
    <>
      <h4>{labName}</h4>
      <h5>{ml}</h5>
      <h6>{back_end}</h6>
      <h5>Front End: {frontEnd}</h5>
    </>
  );
};

export default OptionalChaining;
```

### OPtional Chaining

it simplify the process of accessing to the properties and objects and, plays a vital role when dealing with null or undefined properties to avoid breaking of our code execution.
it is simpler than "&&" syntax wise.

```js
object?.property;
```

1. object is the object on which you want to access a property.
2. property is the property or method you want to access on the object.

##### How it works

- If object is null or undefined, the optional chaining operator short-circuits the expression and returns undefined. This prevents "TypeError: Cannot read property 'property' of null/undefined" errors that would typically occur when accessing properties on null/undefined values.

- If object is not null or undefined, the operator checks if the property exists on the object. If it exists, it returns the value of the property or executes the method. If it doesn't exist, it returns undefined.

```js
const x = { name: "ahmad" };

const nameValue = x?.name; //ahmad
console.log(nameValue);
//it says, check if x is exist, if exists, return the value that is to the right hand side of &&
const undefinedValue = y?.name;
console.log(undefinedValue); // undefined
// Since, y does not exist, it evaluates to false and returns undefined.
const numbers = [1, 2, 3];
const firstNumber = numbers?.[0]; // 1
```

we can pass at the end of either "&&" or "." an optional string a string, string's value will be the returned value if the chaining value is undefined or null.

```js
const nameValue = y?.name || "y does not exist"; // y does not exist
```

### GLobal Default Setup

if we want some properties to be attached to each of our equest, we can set a global setup.
after that for every request we do, automatically we get that.
it has one downside and that is, the setup will be applied to all requests we are sending and we might do not want this for our requests.

what to do ?

define a custom axios, and call that on the requests you want have those specification.

```js
import axios from "axios";

const AuthFetch = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/json",
  },
});
export default AuthFetch;
```

in the above snippet, only the calls we make using "AuthFetch" will have this header.
