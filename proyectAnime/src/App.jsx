import { useState } from 'react'

import Home from './components/index.jsx';
import {  Routes as Pepe, Route } from "react-router-dom";
import './App.css'
import Home2 from './components/index2.jsx';
import Nav from './components/nav.jsx';
import NavMovil from './components/navMobil.jsx';
import NavPrincipal from './components/navPrincipal.jsx';
function App() {

  return (
<div >
  <Pepe>
  <Route path={"/proyectAnime"}   element={<NavPrincipal/>} >
  <Route path={"/proyectAnime"} element={<Home  />} />
  
  <Route path={"/proyectAnime/populares"} element={<Home2/>}/>
  </Route>
  </Pepe>
</div>

  
  )
}

export default App
