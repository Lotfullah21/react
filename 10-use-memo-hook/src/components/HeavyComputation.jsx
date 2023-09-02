import { useMemo } from "react";
import expensiveFunction from "./Expensive";
const value1 = useMemo(() => expensiveFunction(), []);
console.log(value1);
const HeavyComputation = () => {
  return <h2>{value1}</h2>;
};
export default HeavyComputation;
