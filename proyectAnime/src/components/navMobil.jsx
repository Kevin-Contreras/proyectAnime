import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import foto from '../assets/icons8-menu-squared-50.png'
import { Link,Outlet } from "react-router-dom";
import imagen from "../assets/sha.png"
import '../App.css'
function NavMovil() {
function myFunction(){


  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }


}
  return (
    <div >

<div class="topnav">
<img src={imagen} ></img>
  <div id="myLinks">
  <Link  to={"/proyectAnime"} >HOME</Link>
  <Link  to={"/proyectAnime/populares"} >MANGA</Link>
   
  </div>
  <a href="javascript:void(0);" class="icon" onClick={myFunction}>
    <img src={foto} alt="" />
  </a>
</div>

<Outlet  className='nav2'/>



</div>

    
  )
}
export default NavMovil
