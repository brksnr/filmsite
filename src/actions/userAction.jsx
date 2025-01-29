
export const SET_USER = "SET_USER";
export const SET_FAVORITE_FILMS = "SET_FAVORITE_FILMS";



export const loginUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData 
  };
};

export const userFavoriteFilms = (favoriteFilms) => {
  return {
    tpye: SET_FAVORITE_FILMS,
    payload: favoriteFilms
  };
};
