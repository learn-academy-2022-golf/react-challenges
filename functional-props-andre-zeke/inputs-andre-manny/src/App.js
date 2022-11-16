import React, {useState} from 'react';
import GoodRobot from './conponets/Display';
import Badrobot from './conponets/Badrobot';
const App = () => {

  const [name, setName ] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
     <h1>Listening Robot</h1> 
    <GoodRobot name={name} />
    <input type="text" onChange={handleChange} />
    
    <Badrobot name={name} />
    <input type="text" onChange={handleChange} />
    </>
  );
}

export default App;
