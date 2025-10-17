import React from 'react';

const Incrementer = ({ count, setCount }) => {
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ margin: "10px", padding: "10px" }}
    >
      Increment:{count}
    </button>
  );
};

export default Incrementer;
