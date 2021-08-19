import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from 'react-router-dom';

const Login = ({setDomain}) => {
    const [name,setName]=useState("")
    const [pass,setPass]=useState("")
    const [error,setError]=useState("")
    const history = useHistory()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
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
            console.log(dom)
            setDomain(dom)
            history.push('server')
    }
    return (
        
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card card_login">
                            <form onSubmit={handleSubmit} className="box box-login mt-4">
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
