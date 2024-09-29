## useMemo hook

In React, the "useMemo" is used to memoized the return value of an expensive computation.

The main idea here is, if we have an expensive computation, we do not need to compute the calculation every time we re-render a page.
We use the useMemo hook to memoize the result of an expensive computation. The first argument to useMemo is a function that performs the computation, and the second argument is an array of dependencies. The memoized value (expensiveResult) will only be recalculated when the dependencies (data in this case) change.

#### Arguments:

It takes two argument, first one is the function that returns a computation, and the 2nd one is a dependency array which dictates when to re-render or re-compute the computation.
unless the parameters we are passing to the dependency array does not change, the "useMemo" does not going to change the value.
