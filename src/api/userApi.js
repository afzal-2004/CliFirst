import API from './client';

// GET all users
export const getUsers = () => API.get('/users');

// GET single user
export const getUserById = id => API.get(`/users/${id}`);

// CREATE user
export const createUser = data => API.post('/users', data);

// UPDATE user
export const updateUser = (id, data) => API.put(`/users/${id}`, data);

// DELETE user
export const deleteUser = id => API.delete(`/users/${id}`);
