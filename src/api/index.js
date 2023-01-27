import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const fetchProjects = (page) => API.get(`/projects?page=${page}`);
export const fetchProjectsBySearch = (searchQuery) => API.get(`/projects/search?searchQuery=${searchQuery.search || 'none'}`);
export const createProject = (newProject) => API.post('/projects', newProject);
export const updateProject = (id, updatedProject) => API.patch(`/projects/${id}`, updatedProject);
export const deleteProject = (id) => API.delete(`/projects/${id}`);

export const signIn = (formData) => API.post('/auth/signin', formData);


