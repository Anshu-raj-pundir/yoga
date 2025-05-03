import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import About from "./About";
import Class from "./Class";


function Menu() {
  return (

    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/class" element={<Class/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>

    </Routes>
  </BrowserRouter>
  )
}

export default Menu