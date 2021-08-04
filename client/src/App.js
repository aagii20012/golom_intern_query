import React,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [data,setData]=useState([{}])
  const [search,setSearch]=useState()

  //useEffect(()=>{
  //  fetch("/members",{
  //     method:"POST",
  //      cache: "no-cache",
  //      headers:{
  //          "content_type":"application/json",
  //      },
  //      body:JSON.stringify("hello")
  //      }).then(
  //    res=>res.json()
  //  ).then(
  //   data=>{
  //      setData(data)
  //      console.log(data)
  //    }
  //  )
  //},[])
  const handleSubmit =(e)=> {
    e.preventDefault()
    if(!search)
    {
      alert('asd')
      return
    }else{
      axios.post('/members',{
        id:search
      }).then((res)=>{
        setData(res)
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} method="get">
        <label>
          Table ID:
          <input type="text" name="player_id"
           onChange={(e)=>setSearch(e.target.value)}/>
          <input type="submit"  value="search" />
        </label>
      </form>
      <div style={{margin:10}}>
        <table>
          <tr>
            <td>id</td>
            <td>firstname</td>
            <td>lastname</td>
            <td>email</td>
          </tr>
          {data.map((row)=>(
            <h3>aa</h3>
          ))}
        </table>
      </div>
    </div>
  )
}

export default App
