import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import api from "../api/fetch"
import '../App.css'
import CircularIndeterminate from './load'
import { margin } from '@mui/system'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Home(props) {
let [dato,setDato] = useState({data:[]})
let [loader,setLoader] = useState(false)
let [busqueda,setBusqueda]=useState("")
let [click,setClick]=useState(false)

let buscar=(event)=>{
  setBusqueda(event.target.value)
  console.log(busqueda)
}
let buscarAnime =(event)=>{
  setClick(true)
  setLoader(true)
  fetch("https://api.jikan.moe/v4/anime?q="+busqueda).then((res)=>{
  
    
  return  res.json()
}).then((data)=>{ 

if(data.status=="429"){


}else{
setDato({data:data.data})
setLoader(false)

}

}).catch((err)=>{
setLoader(true)

})
}
 useEffect(()=>{
  setLoader(true)
  fetch("https://api.jikan.moe/v4/recommendations/anime").then((res)=>{
  
    
    return  res.json()
}).then((data)=>{ 
  
if(data.status=="429"){
 
 
}else{
  setDato({data:data.data})
  setLoader(false)

}

 }).catch((err)=>{
  setLoader(true)
 
 })
},[])


  return (
    <div className='uno' >
      <h1 className='tt'>ANIME</h1>
      <input className='search'  value={busqueda} onChange={buscar} placeholder="Search" aria-label="Search"/>
      <Button variant="contained" onClick={buscarAnime} color="secondary" className='boton'>buscar</Button>

      <div style={{width:"100%",marginTop:"2%"}}>
    {(loader==true)? <CircularIndeterminate/>:dato.data.map((anime)=>{
      
        return <img style={{margin:"10px",height:"300px",width:"200px"} }src={ (click==false)?anime.entry[0].images.jpg.image_url:anime.images.jpg.image_url}/>
      
    
    })}
    </div>
    </div>
  )
}

export default Home
