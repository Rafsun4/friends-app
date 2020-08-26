import React from 'react';
import './Friends.css'

const Friends = (props) => {
    const { picture, name, email, phone, dob, location } = props.userDetails;

    const generateSalary = Math.floor(1000 + Math.random() * 9000);
    console.log(generateSalary);

    return (
        <div className="user">
            <div>
                <img src={picture.large} alt="" />
            </div>
            <div className="details">
                <h2>{name.title} {name.first} {name.last}</h2>
                <h3>Email: {email}</h3>
                <h3>Phone: {phone}</h3>
                <h3>Age: {dob.age}</h3>
                <h3>Country: {location.country}</h3>
            </div>
            <div className="money">
                <h3>Annual Income: ${generateSalary}</h3>
                <button onClick={() => props.addFriend(generateSalary)}>Add <i className="fas fa-user"></i>+</button>
            </div>
        </div>
    );
};

export default Friends;
