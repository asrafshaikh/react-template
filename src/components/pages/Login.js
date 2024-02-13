// Login.js
import React, { useState } from 'react';
import '../pages/Login.css'; // Import your CSS file

const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        let valid = true;

        if (formData.username.trim() === '') {
            setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
            valid = false;
        }

        if (formData.password.trim() === '') {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
            valid = false;
        }

        if (valid) {
            // Perform login logic (e.g., API call)
            console.log('Login successful!');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <span className="error">{errors.username}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span className="error">{errors.password}</span>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
