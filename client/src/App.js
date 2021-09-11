import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './components/login';
import Admin from './components/admin';

function App() {
  const [domain,setDomain]=useState({
  })
  return (
    <div>
      <Router>
        <ul className="navBar">
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login">
            <Login setDomain={setDomain}/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
