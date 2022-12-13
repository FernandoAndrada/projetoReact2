import { useState } from 'react';
import './App.css'



function App() {

  const [count, setCount] = useState (0)

  function handleCount(){
    setCount(count + 1);
  }

  function handleCountDim(){
    setCount(count -1);
  }

  function cleanCount(){
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Olá Futuros Devs!!!!</h1>
      <p>Falta {count} dias para sua contratação!!!</p>
      <button className='a'
      onClick = {handleCount}>Aumenta os dias</button>
      <br />
      <br />
      <button className='a'
      onClick={handleCountDim}>Diminui os dias</button>
      <br />
      <br />
      <button className='a'
      onClick={cleanCount}>Zera os dias</button>
    </div>

  )
}

export default App
