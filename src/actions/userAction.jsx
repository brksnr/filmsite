
export const SET_USER = "SET_USER";
export const SET_FAVORITE_FILMS = "SET_FAVORITE_FILMS";
export const DELETE_FAVORITE_FILM = "DELETE_FAVORITE_FILM";



export const loginUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData 
  };
};

export const userFavoriteFilms = (favoriteFilms) => {
  return {
    type: SET_FAVORITE_FILMS,
    payload: favoriteFilms, 
  };
};


export const deleteFilmFromFavorites = (filmId) => {
  return {
    type: "DELETE_FAVORITE_FILM",
    payload: filmId,
  };
};
