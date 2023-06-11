import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import { useContext } from 'react';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const signUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const googleSignUp = () =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }
    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth, usergot =>{
            setUser(usergot)
            console.log(usergot)

            if(usergot){
                axios.post(`https://prime-sports-server.vercel.app/jwt`, {email: usergot.email})
                .then(data => {
                    localStorage.setItem('token', data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('token')
            }

        })
        return ()=>{
            unsubsribe();
        }
    },[])

    
    const userInfo = {
        signUp,
        logIn,
        googleSignUp,
        logOut,
        user,
        loading,

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;