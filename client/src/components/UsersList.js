import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
} from 'react-admin'

const UsersList = (props)=> {
    return <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EditButton basePath=""/>
            <DeleteButton basePath=""/>
        </Datagrid>
    </List>
    
}

export default UsersList
