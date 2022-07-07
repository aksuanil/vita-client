
import React, { useContext } from 'react'
import { checkLoginStatus, loginWithEmailAndPassword, logout, registerWithEmailAndPassword } from '../service/auth/auth'

export interface IAuthProvider {
    deleteAccount?: (shouldPrompt?: boolean) => void
    registerWithEmailAndPassword: any
    loginWithEmailAndPassword: any
    logout: () => void
    checkLoginStatus: () => Promise<boolean>
}

export const AuthContext = React.createContext<IAuthProvider>({
    loginWithEmailAndPassword() {
        throw new Error('AuthContext not yet initialized.')
    },
    registerWithEmailAndPassword() {
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

    loginWithEmailAndPassword();
    registerWithEmailAndPassword();
    logout();
    checkLoginStatus();

    const data: IAuthProvider = { registerWithEmailAndPassword, loginWithEmailAndPassword, logout, checkLoginStatus };

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