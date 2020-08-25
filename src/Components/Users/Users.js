import React from 'react';
import { useEffect, useState } from 'react';

const Users = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(data => {
            console.log()
            setUsers(data.results)})
        .catch(error => console.log(error))
    });

   

    return (
        <div className="container">
            <div className="users">
                <ul>
                    {
                        users.map(users => <Users
                             users={users}
                            key={users.phone}
                        ></Users>)
                    }
                </ul>
            </div>
            <div className="cart">
                    {/* <Cart></Cart> */}
            </div>
        </div>
    );
};

export default Users;