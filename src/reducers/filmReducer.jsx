import { SET_FILMS, SET_GENRES, SET_STARS } from "@/actions/filmActions";



const initialState = {
    films: [],
    genres: [],
    stars: []
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return { ...state, films: action.payload};
        case SET_GENRES:
            return { ...state, genres: action.payload}; 
        case SET_STARS:
            return { ...state, stars: action.payload};
        default:
            return state
    }
}


export default filmReducer;