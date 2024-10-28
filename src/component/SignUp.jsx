import React from 'react'
import { useNavigate } from 'react-router-dom';
import './signup.css'; 
import { useState } from 'react';

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    localStorage.removeItem("userDetails")
    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = { username, password, email, phoneNumber };
        
        const existingUsers = JSON.parse(localStorage.getItem("userDetails")) || [];

        const userExists = existingUsers.some(user => user.username === username);

        if (userExists) {
            alert("Username already exists. Please choose a different one.");
            return;
        }

        existingUsers.push(newUser);
        localStorage.setItem("userDetails", JSON.stringify(existingUsers));

        alert("User registered successfully!");
        navigate('/login'); 
    };

  return (
    <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Sign Up</button>
            </form>
        </div>
  )
}
