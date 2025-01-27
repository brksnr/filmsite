const { SET_USER } = require("@/actions/userAction");


const initialState = {};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                token: action.payload.token,
              };
        default:
            return state;
    }
};


export default userReducer;