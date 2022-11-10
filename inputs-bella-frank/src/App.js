import logo from './logo.svg';
import './App.css';
// As a user, I can see a landing page with heading and a text input.
// As a user, I see titles of three robots waiting for my text.
// As a user, I see my "Good Robot" repeating exactly what I type in real time.
// As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
// As a user, I see a third robot that modifies the input as per the developer's choice in real time.
function App() {
  return (
    <div className="App">
    <h1>Kitty Robo Active Listening</h1>
    <input type="text" /> 
    </div>
  );
}

export default App;
