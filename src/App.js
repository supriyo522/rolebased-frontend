import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UploadDocument from './components/UploadDocument';
import DocumentsList from './components/DocumentsList';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [role, setRole] = useState(localStorage.getItem('role') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }, [token, role]);

  return (
    <Router>
      <div>
        <h1>Role-Based Application</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} setRole={setRole} />} />
          <Route path="/upload" element={token && role === 'A' ? <UploadDocument token={token} /> : <Navigate to="/login" />} />
          <Route path="/documents" element={token && role === 'B' ? <DocumentsList token={token} /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/register" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;     





