import React from 'react';

const ColorCard = ({ color, setColor }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your favorite color"
        onChange={(e) => setColor(e.target.value)}
      />
      <p>Child Component: Current color is <b>{color || '...'}</b></p>
    </div>
  );
};

export default ColorCard;
