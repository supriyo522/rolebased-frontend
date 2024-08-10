import React from 'react';
import { approveDocument } from '../api';
import './ApproveDocument.css'; 


const ApproveDocument = ({ documentId, token, onApprove }) => {
  const handleApprove = async () => {
    try {
      const response = await approveDocument(documentId, token);
      alert(response.data.message);
      onApprove(documentId);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <button className="approve-button" onClick={handleApprove}>Approve</button>
  );
};

export default ApproveDocument;



