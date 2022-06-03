import axios from "axios";
import { RegisterCredentials } from '../types'

export const registerWithEmailAndPassword = (data: RegisterCredentials) => {
    return axios.post('http://localhost:8080/api/auth/signup', data);
}