import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null);
const MyAuthContext = ({children}) => {

    // create user 
    const createUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser
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