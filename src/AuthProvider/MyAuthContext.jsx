import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null);
const MyAuthContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);


    // create user 
    const createUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // social Login(google)
    const googleLogIn =() =>{
        return signInWithPopup(auth, googleProvider)
    }
    // sign out 

    const logOut =() =>{
        return signOut(auth)
    }

    // creating observer 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        logInUser,
        googleLogIn,
        logOut, 
        user
    }
    return (
        <authContext.Provider value={authInfo}>
            {
                children
            }
        </authContext.Provider>
    );
};

export default MyAuthContext;