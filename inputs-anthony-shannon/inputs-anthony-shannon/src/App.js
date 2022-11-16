import "./App.css";
import React from "react";
import { useState } from "react";
// want to create an app with a header and somewhere user can input words and three robots will react differently to what the user inputs
const App = () => {
  const [words, setWords] = useState("");
  const wordChange = (e) => {
    console.log(e.target.value);
    setWords(e.target.value);
  };
  return (
    <>
      <h1>Robot Active Listening!</h1>
      <p>What's Up?</p>
      <input type="text" onChange={wordChange} />
      <h3>Good Robot</h3>
      <p>I hear you saying "{`${words}`}". Is that correct?</p>

      <h3>Kitty Robot</h3>
      <p>Meow meow "{`${words}`}". Is that correct?</p>
    </>
  );
};

export default App;
