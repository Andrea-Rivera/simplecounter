import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);

    // the handleIncrement and handleDecrement can be called with different forms.
    // 1. as a REFERENCE to the function onClick={handleDecrement
    //2. as a callback function using arrow function onClick={() => handleIncrement()}
    //3. Or directly using only arrow function onClick={()=> setCount(count -1)}
  };
  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
