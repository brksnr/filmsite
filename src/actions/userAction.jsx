import { SET_USER } from './userTypes'; 
import { loginUser } from './api';


export const login = (email, password) => async (dispatch) => {
    try {
        const userData = await loginUser(email, password);
        dispatch({
            type: SET_USER,
            payload: {
                username: userData.username,
                email: userData.email,
                token: userData.token,
            },
        });

        localStorage.setItem('token', userData.token);

    } catch (error) {
        console.error("Login Error:", error.message);
    }
};
