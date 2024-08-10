import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadDocument } from '../api';
import './UploadDocument.css';


const UploadDocument = ({ token }) => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('document', file);

    try {
      const response = await uploadDocument(formData, token);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); 
  };

  return (
    <div className="upload-container">
      <div className="nav-buttons">
        <button onClick={handleRegisterRedirect}>Register Role B</button>
      </div>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div>
          <label>Document:</label>
          <input type="file" onChange={handleChange} />
        </div>
        <button type="submit">Upload Document</button>
      </form>
    </div>
  );
};

export default UploadDocument;




