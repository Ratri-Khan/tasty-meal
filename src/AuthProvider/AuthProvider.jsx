import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase';
import { useState } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
      return  createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logout = () =>{
        return signOut(auth);
    }
    const updateUserProfile = ( profile ) =>{
        return updateProfile(auth.currentUser, profile)
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
             console.log('auth state change' , currentUser);
             setUser(currentUser);
         });
         return () =>{
             unsubscribe();
         }
     },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        updateUserProfile,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;