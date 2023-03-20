import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { Link,Outlet } from "react-router-dom";
import imagen from "../assets/sha.png"
import '../App.css'
function Nav() {

  return (
    <div className="apps" >
      <div className='nav'>
        <img src={imagen} style={{marginLeft:"40%"}}></img>
        <h1 className='titulo'>ANIMEFK</h1>
        <ul>
            <li>
                <Link  to={"/"} >HOME</Link>
            </li>
            <li>
                <Link to={"/populares"} >MANGAS RECOMENDADOS</Link>
            </li>
        </ul>
      </div>
 
      <Outlet  className='nav2'/>

     
    </div>
  )
}
export default Nav
