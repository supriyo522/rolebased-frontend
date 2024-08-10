import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocuments } from '../api';
import ApproveDocument from './ApproveDocument';
import './DocumentsList.css';


const DocumentsList = ({ token }) => {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await getDocuments(token);
        setDocuments(response.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    fetchDocuments();
  }, [token]);

  const handleApprove = (documentId) => {
    setDocuments(documents.filter((doc) => doc._id !== documentId));
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Navigate to the register page
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="documents-container">
      <div className="nav-buttons">
        <button onClick={handleRegisterRedirect}>New Register</button>
        <button onClick={handleLoginRedirect}>Already Login</button>
      </div>
      <h3>Documents List</h3>
      <ul className="documents-list">
        {documents.map((document) => (
          <li key={document._id}>
            {document.filename} - Uploaded by: {document.uploadedBy.username}
            <ApproveDocument documentId={document._id} token={token} onApprove={handleApprove} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsList;




