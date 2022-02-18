// import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './TestPart.css';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import Stack from '@mui/material/Stack';

function TestPart() {
    // const [users, setUsers] = useState([])
    const { getAccessTokenSilently } = useAuth0();
    const domain = process.env.REACT_APP_AUTH0_DOMAIN

    const getToken = async () => {
        return getAccessTokenSilently({
        })
    }
    const getUsers = async(token) =>{
        fetch(`http://localhost:8080/userlist`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => res.json()).then(json => console.log(json))       
    }
    getToken().then(token => getUsers(token));


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'mail', headerName: 'Mail', width: 130 },
        {
          field: 'registrationDay',
          headerName: 'Registration Day',
          type: 'date',
          width: 200,
        },
        {
            field: 'lastLogin',
            headerName: 'Last Login',
            type: 'date',
            width: 200,
          },
        {
          field: 'isBlocked',
          headerName: 'Is Blocked',
          width: 130,
          type: 'boolean',
        },
      ];
      
      const rows = [
        { id: 1, name: 'Snow', mail: 'Jon@wntr.bdr', registrationDay: '12.12.2022', lastLogin: '12.12.2022', isBlocked: false },
        { id: 2, name: 'Test', mail: 'test@test.ru', registrationDay: '12.12.2022', lastLogin: '12.12.2022', isBlocked: false },
        { id: 3, name: 'Kek', mail: 'kek@ch.hk', registrationDay: '12.12.2022', lastLogin: '12.12.2022', isBlocked: true },
        { id: 4, name: 'John', mail: 'Jon', registrationDay: '12.12.2022', lastLogin: '12.12.2022', isBlocked: false },
        { id: 5, name: 'Snow', mail: 'Jon', registrationDay: '12.12.2022', lastLogin: '12.12.2022', isBlocked: false },
        { id: 6, name: 'Snow', mail: 'Jon', registrationDay: '12.12.2022', lastLogin: '12.12.2022', isBlocked: false },
        { id: 7, name: 'Snow', mail: 'Jon', registrationDay: '12.12.2022', lastLogin: '12.12.2022', isBlocked: false },
        { id: 8, name: 'Snow', mail: 'Jon', registrationDay: '12.12.2022', lastLogin: '12.12.2022', isBlocked: false },
      ];

    return (
        <div className="TestPartContainer">
            <div className="container">
            <Stack direction="row" spacing={2}>
                <h1>Users</h1>
                <Button variant="outlined" startIcon={<BlockIcon />} color="secondary">
                    Block
                </Button>
                <Button variant="outlined" >
                    Unblock
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
                    Delete
                </Button>
                </Stack>
                <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                />
                </div>
            </div>
        </div>
    );
}
  
  export default TestPart;