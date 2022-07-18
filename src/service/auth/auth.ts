import { RegisterCredentials, LoginCredentials } from './types';
import { axiosRequest } from "../api";

const getUser = (data: RegisterCredentials) => {
    return axiosRequest.post('/auth/getUser', data);
};

const loginWithEmailAndPassword = (data?: LoginCredentials) => {
    return axiosRequest.post('/auth/signin', data, {
        withCredentials: true
    });
};

const registerWithEmailAndPassword = (data?: RegisterCredentials) => {
    return axiosRequest.post('/auth/signup', data);
};

const checkLoginStatus = async () => {
    const response = await axiosRequest.get('/auth/isLogin', {
        withCredentials: true
    });
    if (response.status === 200) {
        return true;
    }
    else {
        return false;
    }
};

const logout = async () => {
    const response = await axiosRequest.post('/auth/signout', {}, {
        withCredentials: true
    });
    if (response.status === 200) {
        window.location.reload();
    }
    else {
        console.log('Failed to log out.');
    }
};

export { getUser, loginWithEmailAndPassword, registerWithEmailAndPassword, checkLoginStatus, logout };