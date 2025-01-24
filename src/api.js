import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const fetchFilms = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/films`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching films:", error);
        throw error; 
    }
};

export const fetchGenres = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/genres`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching genres:", error);
        throw error; 
    }
};