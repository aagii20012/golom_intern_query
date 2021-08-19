import { Link } from "react-router-dom"
import React,{useEffect } from 'react'

const Server = ({setServer}) => {
    const handleCLick =(e)=>{
        console.log(e.target.rel)
        setServer(e.target.rel)
    }
    useEffect(()=>(
        setServer(0)
    ))
    return (
        <div className="container">
            <section>
                <div className="server">
                    <Link to="/form1" onClick={handleCLick} rel={1}>
                        server 1
                    </Link>
                </div>
                <div className="server">
                <Link to="/form1" onClick={handleCLick} rel={2}>
                        server 2
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Server
