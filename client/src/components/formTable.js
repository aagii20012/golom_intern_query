import React,{useState,useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import Pagination from './Pagination'
import { BsFillXCircleFill } from "react-icons/bs";

const FormTable = ({server}) => {
    const [data,setData]=useState([])
    const [displayData,setDisplayData]=useState([])
    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    const [currentPage,setCurrentPage]=useState(1)
    const [dataPerPage]=useState(10)
    const [multiValue,setMultiValue]=useState([])
    const handleSubmit =(e)=> {
        e.preventDefault()
        if(!id&&!name)
        {
          axios.post('/members',{
            id:id,
            name:name,
          }).then((res)=>{
            setDisplayData(res.data)
          }).catch((err)=>{
            console.log(err)
          })
        }else{
          axios.post('/members',{
            id:id,
            name:name,
          }).then((res)=>{
            setDisplayData(res.data)
          }).catch((err)=>{
            console.log(err)
          })
        }
      }
      useEffect(()=>{
        axios.post('/all',{
          server:server,
          id:"",
            name:""
        }).then((res)=>{
          //console.log(res.data)
          setData(res.data)
          setDisplayData(res.data)
        }).catch((err)=>{
          console.log(err)
        })
      },[])
    const handleClear =()=> {
      setDisplayData(data)
    }  
    const searchByid =(e) =>{
      if(!e.target.value)
      {
        setDisplayData(data)
      }else{
        const inputValue= parseInt(e.target.value,10)
        setDisplayData(data.filter((data)=>
        data[0]>=inputValue))
      }
    }
    const searchByName =(e) =>{
      if(!e.target.value)
      {
        setDisplayData(data)
      }else{
        const inputValue= e.target.value
        setDisplayData(data.filter((data)=>
        data[1].toLowerCase().includes(inputValue)))
      }
    }
      const paginate=(pageNumber)=>setCurrentPage(pageNumber)

      const indexOfLastData = currentPage * dataPerPage
      const indexOfFirstData = indexOfLastData - dataPerPage
      const currentData=displayData.slice(indexOfFirstData,indexOfLastData)

      const addMutliVal=()=>{
        let holder=[...multiValue]
        holder.push("")
        setMultiValue(holder)
      }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} method="get">
                <label>Table Query search:</label>
              <div className="form-group form-row">
                <br />
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <label htmlFor="id"> id: </label>
                  <input className="form-control" type="text" name="id" value={id}
                  onChange={(e)=>setId(e.target.value)}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <label htmlFor="name"> name: </label>
                  <input className="form-control" type="text" name="name" value={name}
                  onChange={(e)=>setName(e.target.value)}/>
                </div>
                
              </div>
              <button type="submit" className="btn btn-primary"  >search</button>
            </form>
            <form  method="get">
                <label>Table search:</label>
                <br />
                <label htmlFor="id"> id: </label>
                <input className="form-control" type="text" name="id" 
                onChange={searchByid}/>
                <label htmlFor="name"> name: </label>
                <input className="form-control" type="text" name="name"
                onChange={searchByName}/>
            <button className="btn btn-primary mt-1" type="reset" onClick={handleClear}>clear</button>

            </form> 
            <button className="btn btn-primary mt-1 mb-1 float-right" onClick={handleClear}>
                  clear </button>
            <div style={{margin:10}} className="table-responsive">
                <table className="table table-bordered table-hover ">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">firstname</th>
                      <th scope="col">lastname</th>
                      <th scope="col">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    currentData.length>0 ? currentData.map((row,i)=>(
                      <tr key={i}>
                        {row.map((item,count)=>(
                          <>
                            <td scope={count==0?"row":""}>{item}</td>
                            <td >{item}</td>
                            <td >{item}</td>
                            <td >{item}</td>
                            <td >{item}</td>
                          </>
                        ))}
                      </tr>
                        )) : <tr><td colSpan="4">no data here</td></tr>}
                  </tbody>
                </table>
            </div>
            <Pagination dataPerPage={dataPerPage} totalData={displayData.length}  paginate={paginate}/>
        </div>
    )
}

export default FormTable
