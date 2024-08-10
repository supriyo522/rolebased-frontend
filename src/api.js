import axios from 'axios';

const API_URL = 'https://rolebased-cw2j.onrender.com/api';

export const register = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const login = (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const getDocuments = (token) => {
    return axios.get(`${API_URL}/documents`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

export const uploadDocument = (formData, token) => {
  return axios.post(`${API_URL}/documents/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  });
};

export const approveDocument = (documentId, token) => {
    return axios.post(`${API_URL}/documents/approve`, { documentId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };