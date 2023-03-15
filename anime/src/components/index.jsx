import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import api from "../api/fetch"
import '../App.css'
import CircularIndeterminate from './load'
import { margin } from '@mui/system'
function Home(props) {
let [dato,setDato] = useState({data:[]})
let [loader,setLoader] = useState(false)
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
      
    {(loader==true)? <CircularIndeterminate/>:dato.data.map((anime)=>{
      
        return <img style={{margin:"10px",height:"300px",width:"200px"} }src={ anime.entry[0].images.jpg.image_url}/>
      
    
    })}
    </div>
  )
}

export default Home
