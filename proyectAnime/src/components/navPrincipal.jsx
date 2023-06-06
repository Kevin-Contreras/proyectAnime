import { Link,Outlet } from "react-router-dom";
import imagen from "../assets/sha.png"
import '../App.css'
import NavMovil from "./navMobil";
import Nav from "./nav";
function NavPrincipal() {

  return (
    <div  >
        <div className="primero">
        <Nav/>
        </div>
     <div className="segundo">
     <NavMovil/>
     </div>
      
      <Outlet  className='nav2'/>

     
    </div>
  )
}
export default NavPrincipal
