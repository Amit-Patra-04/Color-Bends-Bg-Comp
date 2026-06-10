import { useState } from 'react'
import './App.css'
import ColorBends from './ColorBends';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorBends
  colors={["d90429", "14213d", "fca311"]}
  rotation={90}
  speed={0.2}
  scale={1}
  frequency={1}
  warpStrength={1}
  mouseInfluence={1}
  noise={0.15}
  parallax={0.5}
  iterations={1}
  intensity={1.5}
  bandWidth={6}
  transparent
  autoRotate={0}
  color="#0c89f0"
/>
    </>
  )
}

export default App
