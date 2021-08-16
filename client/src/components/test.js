import React,{useState,useEffect } from 'react'
import axios from 'axios'

const Test = () => {
    const [testVal,setTestValue]=useState([])
      const hadleTest =()=>{
        axios.post('/all',{
            server:2,
            id:"",
            name:"i"
          }).then((res)=>{
            console.log(res.data)
            setTestValue(res.data)
          }).catch((err)=>{
            console.log(err)
          })
      }
    return (
        <div>
            test
            <button onClick={hadleTest}> click</button>
            { testVal.length>0 ? testVal.map(data=>(
                <div>
                    {data.map(list=>(
                        <div style={{marginLeft:10}}>{list}</div>
                    ))}
                </div>
            )):"no value"}
        </div>
    )
}

export default Test
