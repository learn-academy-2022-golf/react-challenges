import { useState } from 'react' 
import BuenoBot from './components/BuenoBot'
import MaloBot from './components/MaloBot';
import SelenaBot from './components/SelenaBot';

const App = () => {

  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
    // console.log(name)
  }

  return (
    <>
    <h1>!Hola Alejandro!</h1>
    <input type="text" onChange={handleChange} />
    <BuenoBot text={text}/>
    <MaloBot text={"blah"}/>
    <SelenaBot text={text}/>
    </>
  )
}

export default App;
