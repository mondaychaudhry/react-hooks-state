import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`before setState: ${count}`)
  setCount((x) => x + 1);
  console.log(`after first setState: ${count}`)
  setCount((x) => x + 1);
  console.log(`after second setState: ${count}`)

  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
