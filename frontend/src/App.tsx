import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <h1>Meu exemplo</h1>
      <div className="bg-blue-600">
        <button onClick={() => setCount((count) => count + 1)}>
          contador é {count}
        </button>
      </div>
      <div className="bg-blue-700">
        <button onClick={() => setCount2((count2) => count2 - 1)}>
          contador é {count2}
        </button>
      </div>
    </>
  )
}

export default App
