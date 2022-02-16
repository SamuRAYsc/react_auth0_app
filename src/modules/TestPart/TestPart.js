import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './TestPart.css';

function TestPart() {
    const [users, setUsers] = useState([])
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        console.log('effect')
        
        const fetchUsers = async () => {
            try {
                const domain = process.env.REACT_APP_AUTH0_DOMAIN
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2/`,
                    scope: "read:users",
                });
                console.log(accessToken)
                const response = await fetch(`https://${domain}/api/v2/users`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                const json = await response.json()
    
                setUsers(json)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="TestPartContainer">
            <div className="container">
                <h1>Users</h1>
                {/* <div>{users}</div> */}
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">toggle</div>
                        <div className="col col-2">ID</div>
                        <div className="col col-3">Name</div>
                        <div className="col col-4">Mail</div>
                        <div className="col col-5">Registered</div>
                        <div className="col col-6">Last Login</div>
                        <div className="col col-7">Is Blocked</div>
                    </li>
                    <li className="table-row" key={123}>
                        <div className="col col-1">toggle</div>
                        <div className="col col-2">1</div>
                        <div className="col col-3">Name</div>
                        <div className="col col-4">Mail@mail</div>
                        <div className="col col-5">12.12.12</div>
                        <div className="col col-6">12.12.12</div>
                        <div className="col col-7">false</div>
                    </li>
                    <li className="table-row" key={234}>
                        <div className="col col-1">toggle</div>
                        <div className="col col-2">1</div>
                        <div className="col col-3">Name</div>
                        <div className="col col-4">Mail@mail</div>
                        <div className="col col-5">12.12.12</div>
                        <div className="col col-6">12.12.12</div>
                        <div className="col col-7">false</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
  
  export default TestPart;