import React from 'react';

const Decrementer = ({ count, setCount }) => {
  return (
    <button
      onClick={() => setCount(count - 1)}
      style={{ margin: "10px", padding: "10px" }}
    >
      Decrement:{count}
    </button>
  );
};

export default Decrementer;
