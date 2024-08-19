import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1/card/', 
});

export const fetchCards = async (query = '') => {
    try {
        const response = await api.get(`fetch?query=${query}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching cards:", error);
        return [];
    }
};

export const fetchCardByTitle = async (title) => {
    try {
        const response = await api.get(`fetchOne/${title}`);
        return response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        console.error("Error fetching card:", error);
        return null;
    }
};
