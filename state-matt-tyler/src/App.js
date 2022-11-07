
import React, {useState} from "react"



const App = () => {
  const [count, colorCount] = useState(0)
  

  return (
    <>
      <h1>Color Counter</h1>
      <div>  </div>
      <p>Counter: {count}</p>
      
    </>
  )
}

export default App






