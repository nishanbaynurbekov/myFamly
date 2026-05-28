// import { useState } from 'react'
import './App.css'
// import Home from './Home'
import { RouterProvider } from 'react-router-dom'
import myFamly from './router'

function App() {

  return (
    <>
       <RouterProvider router={myFamly}/>
    </>
  )
}

export default App
