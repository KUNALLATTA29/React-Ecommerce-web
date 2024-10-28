import { useState } from "react";
import './login.css';
import { useAuth } from "./AuthContext";
import { Link,useNavigate } from "react-router-dom";

const UserForm = () => {
    const {login} = useAuth()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUserDetails = JSON.parse(localStorage.getItem("userDetails")) || [];

        const user = storedUserDetails.find(user => user.username === username && user.password === password);

        if (user) {
            alert("Login successful!");
            login(); 
            navigate('/'); 
        } else {
            alert("Invalid username or password.");
        }

        setUsername("");
        setPassword("");
    };

    return (
        <div className="form-container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit} className="user-form">
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
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
    );
};

export default UserForm;
