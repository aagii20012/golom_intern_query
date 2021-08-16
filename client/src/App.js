import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Form from './components/formTable'
import Login from './components/login';
import Server from './components/server';
import Test from './components/test';

function App() {
  const [domain,setDomain]=useState({
    name:"",
    pass:"",
  })
  const [server,setServer]=useState(0)
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
  return (
    <div>
      <Router>
        <ul className="navBar">
          <li>
            <Link to="/form1">form</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/server">server</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/form1">
            <Form server={server}/>
          </Route>
          <Route path="/login">
            <Login setDomain={setDomain}/>
          </Route>
          <Route path="/server">
            <Server setServer={setServer}/>
          </Route>
          <Route path="/test" server={server} domain={domain}>
            <Test/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
