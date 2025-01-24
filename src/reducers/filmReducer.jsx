import { SET_FILMS, SET_GENRES, SET_STARS, SET_SELECTED_FİLM, SET_SELECTED_STAR, SET_SELECTED_FİLM_BY_GENRE } from "@/actions/filmActions";



const initialState = {
    films: [],
    selectedFilm: null,
    selectedStar: null,
    selectedFilmByGenre: [],
    genres: [],
    stars: [],
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return { ...state, films: action.payload};
        case SET_GENRES:
            return { ...state, genres: action.payload}; 
        case SET_STARS:
            return { ...state, stars: action.payload};
        case SET_SELECTED_FİLM:
            return { ...state, selectedFilm: action.payload};    
        case SET_SELECTED_STAR:
            return { ...state, selectedStar: action.payload};
        case SET_SELECTED_FİLM_BY_GENRE:
            return { ...state, selectedFilmByGenre: action.payload};
        default:
            return state
    }
}


export default filmReducer;