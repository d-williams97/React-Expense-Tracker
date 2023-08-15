import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prevCount) => {
        return prevCount + 1;
    })
  }


//   function incrementCounterHandler() {
//     setCounter(prevCounter => prevCounter + 1);




  return (
    <div>
      <p id="counter">{count}</p>
      <button onClick={countHandler}>Increment</button>
    </div>
  );
}
