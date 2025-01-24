import { SET_FILMS, SET_GENRES } from "@/actions/filmActions";



const initialState = {
    films: [],
    genres: []
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return { ...state, films: action.payload};
        case SET_GENRES:
            return { ...state, genres: action.payload}; 
        default:
            return state
    }
}


export default filmReducer;