import { SET_USER } from "@/actions/userAction";



const initialState = {
    user: {
      token: null,
      username: null,
      email: null,
    },
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
        default:
            return state;
    }
};


export default userReducer;