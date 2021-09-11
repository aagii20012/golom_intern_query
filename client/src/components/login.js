import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const Login = ({setDomain}) => {
    const [name,setName]=useState("")
    const [pass,setPass]=useState("")
    const [error,setError]=useState("")
    const history = useHistory()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setError("")
        if(!name)
        {
            setError("Please enter usename")
            return
        }
        if(!pass)
        {
            setError("Please enter password")
            return
        }
            const dom={
                name:name,
                pass:pass,
            }
        axios.post('/login',{
                userDom:dom,
              }).then((res)=>{
                  if(typeof res.data === 'string')
                  { 
                    return setError(res.data)
                  }else{
                    setDomain(res.data[0])
                    if(res.data[0][3]==1)  
                    {
                        console.log(res.data)
                        history.push('admin')
                    }else {
                        console.log(res.data)
                        history.push('users')
                    }
                  }
              }).catch((err)=>{
                console.log(err)
              })
    }
    return (
        
        <div >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card card_login">
                            <form onSubmit={handleSubmit} className="box box-login mt-4 p-5">
                                <h1>Login</h1>
                                <p className="text-muted"> Please enter your login and password!</p> 
                                <input type="text" name="" placeholder="Username" onChange={(e)=>(setName(e.target.value))}/> 
                                <input type="password" name="" placeholder="Password" onChange={(e)=>(setPass(e.target.value))}/>
                                <input type="submit" name="" value="Login" href="#"/>
                                {error.length > 0 && 
                                <div class="alert alert-danger" role="alert">
                                {error}
                                </div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
