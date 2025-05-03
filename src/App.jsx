import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Yoga/Home'
import About from './Yoga/About'
import Class from './Yoga/Class'
import Menu from './Yoga/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Class/> */}
    <Menu/>
    </>
  )
}

export default App
