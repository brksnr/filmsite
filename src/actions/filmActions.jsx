import { fetchFilms, fetchGenres } from "@/api";

export const SET_FILMS = 'SET_FILMS';
export const SET_GENRES = 'SET_GENRES';


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
        console.error("Error fetching all films:", error);
    }
};