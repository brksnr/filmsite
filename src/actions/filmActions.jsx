import { fetchFilmById, fetchFilms, fetchGenres, fetchStarById, fetchStars } from "@/api";

export const SET_FILMS = 'SET_FILMS';
export const SET_GENRES = 'SET_GENRES';
export const SET_STARS = 'SET_STARS';
export const SET_SELECTED_FİLM = 'SET_SELECTED_FİLM';
export const SET_SELECTED_STAR = 'SET_SELECTED_STAR';

export const setFilms = (films) => {
    return {
        type: SET_FILMS,
        payload: films
    }
}

export const getAllFilms = () => async (dispatch) => {
    try {
        const films = await fetchFilms();
        dispatch(setFilms(films));
        console.log("All films:", films);
    } catch(error){
        console.error("Error fetching all films:", error);
    }
};

export const setGenres = (genres) => {
    return {
        type: SET_GENRES,
        payload: genres
    }
}

export const getAllGenres = () => async (dispatch) => {
    try {
        const genres = await fetchGenres();
        dispatch(setGenres(genres));
        console.log("All films:", genres);
    } catch(error){
        console.error("Error fetching all genres:", error);
    }
};

export const setStars = (stars) => {
    return {
        type: SET_STARS,
        payload: stars
    }
}

export const getAllStars = () => async (dispatch) => {
    try {
        const stars = await fetchStars();
        dispatch(setStars(stars));
        console.log("All films:", stars);
    } catch(error){
        console.error("Error fetching all stars:", error);
    }
};

export const setSelectedFilm = (film) => {
    return {
        type: SET_SELECTED_FİLM,
        payload: film
    }
}

export const getFilmById = (id) => async (dispatch) => {
    try {
        const film = await fetchFilmById(id);
        dispatch(setSelectedFilm(film));
        console.log("Selected film:", film);
    } catch(error){
        console.error("Error fetching selected film:", error);
    }
};

export const setSelectedStar = (star) => {
    return {
        type: SET_SELECTED_STAR,
        payload: star
    }
};

export const getStarById = (id) => async (dispatch) => {
    try {
        const star = await fetchStarById(id);
        dispatch(setSelectedStar(star));
        console.log("Selected star:", star);
    } catch(error){
        console.error("Error fetching selected star:", error);
    }
};
