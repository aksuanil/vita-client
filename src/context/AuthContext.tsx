
import React, { useContext, useState } from 'react'

export interface IAuthProvider {
    deleteAccount?: (shouldPrompt?: boolean) => void
    signupSubmit: (event: any) => Promise<Response>
    loginSubmit: (event: any) => void
    logout: () => void
    checkLoginStatus: () => Promise<boolean>
}

export const AuthContext = React.createContext<IAuthProvider>({
    signupSubmit() {
        throw new Error('AuthContext not yet initialized.')
    },
    loginSubmit(event: any) {
        throw new Error('AuthContext not yet initialized.')
    },
    logout() {
        throw new Error('AuthContext not yet initialized.')
    },
    checkLoginStatus() {
        throw new Error('AuthContext not yet initialized.')
    }
})

const AuthProvider = ({ children }: any) => {

    const signupSubmit = async (formDataJson: any) => {
        const response = await fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: formDataJson
        });
        return response;
    }

    const loginSubmit = (event: any) => {
        event.preventDefault();
        // togglePopup();
        const formData = new FormData(event.target);
        var object: any = {};
        formData.forEach((value, key) => object[key] = value);
        var formDataJson = JSON.stringify(object);
        (async () => {
            // setLoader(true);
            fetch('http://localhost:8080/api/auth/signin', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: formDataJson
            }).then(async function (res) {
                const content = await res.json();
                if (res.status === 200) {
                    window.location.reload();
                }
                else {
                    console.log('Failed to log in.')
                }
            }).catch(error => {
                // setLoader(false)
                console.log(error);
            });
        })();
    }

    const logout = async () => {
        const response = await fetch('http://localhost:8080/api/auth/signout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200) {
            window.location.reload();
        }
        else {
            console.log('Failed to log out.');
        }
    };

    const checkLoginStatus = async () => {
        const response = await fetch('http://localhost:8080/api/auth/isLogin', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200) {
            return true;
        }
        else {
            return false;
        }
    };

    const data: IAuthProvider = { signupSubmit, loginSubmit, logout, checkLoginStatus };


    return (
        <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth can only be used inside AuthProvider");
    }
    return context;
};

export { AuthProvider, useAuth }