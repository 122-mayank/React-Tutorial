import React from 'react';
import './Colorswitch.css';

export default function Colorswitch({ onChangeColor, buttonColor }) {
  return (
    <div>
      <button
        className="btn"
        onClick={(e) => {
          e.stopPropagation();
          onChangeColor();
        }}
        style={{ backgroundColor: buttonColor }} // Apply the background color here
      >
        Change Color
      </button>
    </div>
  );
}
