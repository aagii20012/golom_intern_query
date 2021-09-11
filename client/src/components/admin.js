import React, { useState } from 'react';
import {Row,Col} from 'react-bootstrap'
import { ProSidebar, Menu, MenuItem, SubMenu ,} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import UserTable from './userTable';


function Admin() {
  const [data,setData]=useState("");
  const handleClick=()=>{
    console.log(data)
  }
    return (
      <>
        <Row>
          <Col sm="3" lg="3" md="3">
            <ProSidebar width="100%" collapsedWidth="500px" >
              <Menu iconShape="square">
                <MenuItem >Dashboard</MenuItem>
                <SubMenu title="Components" >
                  <MenuItem onClick={()=>{setData("users")}}>User</MenuItem>
                  <MenuItem onClick={()=>{setData("admin")}}>Admin</MenuItem>
                </SubMenu>
              </Menu>
            </ProSidebar>
          </Col>
          <Col sm="9" lg="9" md="9">
            <div>
              {data===""? "Welcome":""}
              {data==="admin"?  <UserTable who="true"/>:""}
              {data==="users"? <UserTable who="false"/>:""}
            </div>
          </Col>
        </Row>
      </>
    )
        
}

export default Admin
