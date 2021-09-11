import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import axois from 'axios'
import { BsPencilSquare,BsTrash } from "react-icons/bs";

function UserTable({who}) {
    const [datas,setDatas]=useState([])
    const admin=(<thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
        </tr>
    </thead>)
    const user=(<thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
        </tr>
    </thead>)
    useEffect(()=>{
        axois.post('/admin/users',{
            isAdmin:who
        })
        .then((res)=>{
            setDatas(res.data)
            console.log(datas[0][0])
          }).catch((err)=>{
            console.log(err)
          })
    },[])
    const handleEdit=(msg)=>{
        alert(msg)
    }
    const handleDelete=(msg)=>{
        alert(msg)
    }
    return (
        <>
        {who==="true"?  "Welcome admin table":""}
        {who==="false"? "Welcome user table":""}
        <Table responsive="sm" responsive="md">
            {user}
            <tbody>
                {datas.length>0?datas.map((lists)=>(
                    <tr>{lists.map((item)=>(
                        <td>{item}</td>
                    ))}
                    <td><BsPencilSquare onClick={() => handleEdit(lists[0])}/></td>
                    <td><BsTrash onClick={() => handleDelete(lists[0])}/></td></tr>
                )):""}
            </tbody>
        </Table>
        </>
    )
}

export default UserTable
