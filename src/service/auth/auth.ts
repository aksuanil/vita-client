import { RegisterCredentials, LoginCredentials } from './types';
import { axiosRequest } from "../api";

const getUser = (data: RegisterCredentials) => {
    return axiosRequest.post('/auth/getUser', data);
};

const loginWithEmailAndPassword = (data?: LoginCredentials) => {
    debugger
    return axiosRequest.post('/auth/signin', data);
};

const registerWithEmailAndPassword = (data?: RegisterCredentials) => {
    debugger;
    return axiosRequest.post('/auth/signup', data);
};

const checkLoginStatus = async () => {
    debugger
    const response = await axiosRequest.get('/auth/isLogin');
    if (response.status === 200) {
        return true;
    }
    else {
        return false;
    }
};

const logout = async () => {
    const response = await axiosRequest.get('/api/auth/signout');
    if (response.status === 200) {
        window.location.reload();
    }
    else {
        console.log('Failed to log out.');
    }
};

export { getUser, loginWithEmailAndPassword, registerWithEmailAndPassword, checkLoginStatus, logout };