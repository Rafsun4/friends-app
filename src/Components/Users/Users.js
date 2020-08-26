import React from 'react';
import { useEffect, useState } from 'react';
import './Users.css'
import Friends from '../Friends/Friends';
import Cart from '../Cart/Cart'

const Users = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=15")
        .then(res => res.json())
        .then(data => setUsers(data.results))
        .catch(console.log("error"))
    }, []);

    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    

    return (
        <div className="container">
            <div className="user">
                {
                    users.map(users => <Friends
                        userDetails={users}
                        key={users.phone}
                        handleAddProduct={handleAddProduct}
                    ></Friends>)
                }
            </div>
            <div className="cart">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Users;