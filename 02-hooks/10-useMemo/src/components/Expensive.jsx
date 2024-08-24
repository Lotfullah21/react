const expensiveFunction = () => {
  let value = 0;
  for (let i = 0; i < 100000000000; i++) {
    value = value + i;
  }
  return { value };
};

export default expensiveFunction;
