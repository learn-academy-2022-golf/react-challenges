import React, { useState } from "react";

function App() {
  const changeColor = () => {
    const [color, setColor] = useState([
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
      "pink",
    ]);
    const [colorIndex, setColorIndex] = useState(0);
    const handleClick = () => {
      setColorIndex(colorIndex = Math.floor(Math.random * color.length))
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: white,
          borderStyle: "solid",
          height: 100,
          width: 100,
          margin: "auto",
        }}
      >
        <box>White</box>
      </div>
    </>
  );
}

export default App;
