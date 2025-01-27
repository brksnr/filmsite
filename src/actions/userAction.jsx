
export const SET_USER = "SET_USER";




export const loginUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData 
  };
};
