import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const galleryApi = {
    getAll: () => api.get('/gallery'),
    getById: (id: string) => api.get(`/gallery/${id}`),
    create: (formData: FormData) => api.post('/gallery', formData),
};

export const blogApi = {
    getAll: () => api.get('/blogs'),
    getById: (id: string) => api.get(`/blogs/${id}`),
    create: (formData: FormData) => api.post('/blogs', formData),
    update: (id: string, formData: FormData) => api.patch(`/blogs/${id}`, formData),
};

export default api;
