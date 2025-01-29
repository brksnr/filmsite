
export const SET_USER = "SET_USER";
export const SET_FAVORITE_FILMS = "SET_FAVORITE_FILMS";
export const DELETE_FAVORITE_FILM = "DELETE_FAVORITE_FILM";



export const loginUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData 
  };
};

export const userFavoriteFilms = (favoriteFilm) => {
  return {
    type: SET_FAVORITE_FILMS,
    payload: favoriteFilm
  };
};

export const deleteFilmFromFavorites = (film) => {
  return {
    type: "DELETE_FAVORITE_FILM",
    payload: film,
  };
};
