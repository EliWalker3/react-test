import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count > 0 ? "why." : "there is a button below this. do not press it."}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p id='count-text'>
          {count > 0 ? "now why would you do that?" : "don't click this button."}

        </p>
      </div>
      <p className="read-the-docs">
        {count > 0 ? "Click on the logos and they will lead somewhere interesting. You had to press it..." : "Click on the logos and they will lead somewhere interesting. Also, don't click that button above this."}        
      </p>
    </>
  )
}

export default App
