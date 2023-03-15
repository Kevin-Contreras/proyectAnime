import CircularIndeterminate from "../components/load";
function get(url){

   return  fetch(url).then((res)=>{
        return  res.json()
    }).then((data)=>{  data.data})
}
export default get;