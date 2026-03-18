import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const sendMessage = async (payload) => {
  const response = await api.post('/messages', payload);
  return response.data;
};

export const login = async (payload) => {
  const response = await api.post('/auth/login', payload);
  return response.data;
};

export const createProject = async (payload, token) => {
  const response = await api.post('/projects', payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateProject = async (id, payload, token) => {
  const response = await api.put(`/projects/${id}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteProject = async (id, token) => {
  const response = await api.delete(`/projects/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
