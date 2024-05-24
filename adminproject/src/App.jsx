import React from 'react'
import Button from './components/Button'
import "./App.css"
import Home from './components/Home'
function App() {
  return (
    <div>
      <div className='div1'>
        <Home><h1 className='col1'>haloo</h1></Home>
      </div>
      <Button color="btn">giorgi</Button>
      <Button color="btn1">ilia</Button>
      <Button color="btn2">nino</Button>
      <Button color="btn3">karlo</Button>
    </div>
  )
}

export default App
