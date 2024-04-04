import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types'
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AUthProvider = ({ children }) => {
const [user, setUser]= useState(null)
const [loading, setLoading] = useState(true)

const googleAuthProvider = new GoogleAuthProvider();

const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password )
}


const signIn = (email, password)=>{
return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () =>{
    setLoading(true)
   return signOut(auth)
}

// observe auth state change

useEffect(()=>{
 const unSubscribe=   onAuthStateChanged(auth, currentUser =>{
       setUser(currentUser)
       console.log('first', currentUser)
       setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
},[])


const signInGoogle = () =>{
    return signInWithPopup(auth, googleAuthProvider)
}


const authInfo ={user, createUser , signIn, logOut, signInGoogle,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



AUthProvider.propTypes = {
    children: PropTypes.node,
}
export default AUthProvider;