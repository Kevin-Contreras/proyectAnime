import { useState } from 'react'

import Home from './components/index.jsx';
import {  Routes as Pepe, Route } from "react-router-dom";
import './App.css'
import Home2 from './components/index2.jsx';
import Nav from './components/nav.jsx';
function App() {

  return (
<div >
  <Pepe>
  <Route path={"/"}   element={<Nav/>} >
  <Route path={"/"} element={<Home  />} />
  <Route path={"/populares"} element={<Home2/>}/>
  </Route>
  </Pepe>
</div>

  
  )
}

export default App
