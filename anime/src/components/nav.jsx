import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { Link,Outlet } from "react-router-dom";
import '../App.css'

function Nav() {


  return (
    <div className="apps" >
      <div className='nav'>
        <h1 className='titulo'>ANIMEFK</h1>
      <input className='search'  placeholder="Search" aria-label="Search"/>
        <ul>
            <li>
                <Link  to={"/home"} >HOME</Link>
            </li>
            <li>
                <Link to={"/populares"} >POPULARES</Link>
            </li>
        </ul>
      </div>
 
      <Outlet  context={"hola"} className='nav2'/>

     
    </div>
  )
}

export default Nav
