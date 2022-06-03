import axios from "axios";
import { LoginCredentials } from '../types'

export const loginWithEmailAndPassword = (data: LoginCredentials) => {

    return axios.post('http://localhost:8080/api/auth/signin', data);
    // (async () => {
    //     // setLoader(true);
    //     fetch('http://localhost:8080/api/auth/signin', {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: formDataJson
    //     }).then(async function (res) {
    //         const content = await res.json();
    //         if (res.status === 200) {
    //             window.location.reload();
    //         }
    //         else {
    //             console.log('Failed to log in.')
    //         }
    //     }).catch(error => {
    //         // setLoader(false)
    //         console.log(error);
    //     });
    // })();
}