import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
});

export const login = async (name, password) => {
    try {
        const response = await api.post('/api/login', { name, password });
        return response.data.token;
    } catch (error) {
        throw error;
    }
};

export default api;