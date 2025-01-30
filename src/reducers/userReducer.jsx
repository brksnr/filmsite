import { SET_FAVORITE_FILMS, SET_USER } from "@/actions/userAction";



const initialState = {
    user: {
      token: null,
      username: null,
      email: null,
    },
    favoriteFilms: [],
  };


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: {
                  token: action.payload.token,
                  username: action.payload.username,
                  email: action.payload.email,
                },
              };
              case SET_FAVORITE_FILMS:
            return {
                ...state,
                favoriteFilms: action.payload,  
            };
                case "DELETE_FAVORITE_FILM":
                return {
                  ...state,
                  favoriteFilms: state.favoriteFilms.filter((f) => f !== action.payload),
                };
        default:
            return state;
    }
};


export default userReducer;