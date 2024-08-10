import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';
import './Register.css';


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'A' 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      alert(response.data.message);
      setFormData({ username: '', password: '', role: 'A' }); // Reset form after successful registration
      navigate('/login'); // Navigate to the login page
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="A">Role A</option>
            <option value="B">Role B</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="register-login-button">
        <button onClick={handleLoginRedirect}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default Register;

