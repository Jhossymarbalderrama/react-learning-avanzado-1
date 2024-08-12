import { useState } from 'react'
import './App.css'
import MiBoton from './components/MiBoton'
import MiOtroBoton from './components/MiOtroBoton'
import MiCheck from './components/MiCheck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App-header'>
        <div className='App'>
            <MiBoton/>
            <MiOtroBoton/>
            <MiCheck/>
        </div>
      </div>
    </>
  )
}

export default App
