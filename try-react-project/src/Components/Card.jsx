import React from 'react';

const Card = (props) => {
  return (
    <div
      style={{
        border: "2px solid #7e22ce",
        borderRadius: "12px",
        padding: "20px",
        margin: "20px auto",
        width: "300px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        backgroundColor: "#f3e8ff",
        textAlign: "center"
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
