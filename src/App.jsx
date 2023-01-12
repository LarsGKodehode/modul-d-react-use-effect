import { useState, useEffect } from 'react'
import './App.css'

import GetPokemons from './components/GetPokemons'
import Timer from './components/Timer'

function App() {
  const [show, setShow] = useState(true)

  function toggleShow() {
    setShow(
      (oldState) => !oldState
    )
  }

  return (
    <div className="App">
      <button onClick={toggleShow}>Show</button>
      {
        show && (
          <>
            <GetPokemons />
            {/* <Timer /> */}
          </>
        )
      }
    </div>
  )
}

export default App
