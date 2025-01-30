import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';




export const loginUser = async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
      return response.data;
    } catch (error) {
      throw new Error("Login failed: " + error.response?.data?.message || error.message);
    }
  };

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

export const fetchStars = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stars`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching stars:", error);
        throw error; 
    }
};

export const fetchFilmById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/films/${id}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching film by id:", error);
        throw error; 
    }
};

export const fetchFilmsByGenre = async (genre) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/films/by-genre?genre=${genre}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching films by genre:", error);
        throw error; 
    }
};

export const fetchStarById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stars/${id}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching star by id:", error);
        throw error; 
    }
};

export const addFavoriteFilm = async (username, filmId) => {
    try {
        
        const response = await axios.post(`${API_BASE_URL}/${username}/favorites?filmId=${filmId}`);
        return response.data; 
    } catch (error) {
        console.error("Error adding favorite film:", error);
        throw error; 
    }
};


export const fetchFavorites = async () => {
    const username = localStorage.getItem("username");
    if (!username) {
        throw new Error("Username is required but not found.");
    }
    try {
        const response = await axios.get(`${API_BASE_URL}/${username}/favorites`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching favorite films:", error);
        throw error; 
    }
};

export const removeFavoriteFilm = async (filmId) => {
    const username = localStorage.getItem("username");
    if (!username) {
        throw new Error("Username is required but not found.");
    }
    try {
        const response = await axios.delete(`${API_BASE_URL}/${username}/favorites/${filmId}`);
        return response.data; 
    } catch (error) {
        console.error("Error removing favorite film:", error);
        throw error; 
    }
};


