import { fetchFilmById, fetchFilms, fetchFilmsByGenre, fetchGenres, fetchStarById, fetchStars } from "@/api";

export const SET_FILMS = 'SET_FILMS';
export const SET_GENRES = 'SET_GENRES';
export const SET_STARS = 'SET_STARS';
export const SET_SELECTED_FİLM = 'SET_SELECTED_FİLM';
export const SET_SELECTED_STAR = 'SET_SELECTED_STAR';
export const SET_SELECTED_FİLM_BY_GENRE = 'SET_SELECTED_FİLM_BY_GENRE';

export const setFilms = (films) => {
    return {
        type: SET_FILMS,
        payload: films
    }
}



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

export const setSelectedFilmByGenre = (genre) => async (dispatch) => {
    return {
        type: SET_SELECTED_FİLM_BY_GENRE,
        payload: genre
    }
};

export const getFilmsByGenre = (genre) => async (dispatch) => {
    try {
        const films = await fetchFilmsByGenre(genre);
        dispatch(setFilms(films));
        console.log("Filtered films:", films);
    } catch(error){
        console.error("Error fetching filtered films:", error);
    }
};
