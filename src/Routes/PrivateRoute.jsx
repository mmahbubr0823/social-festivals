import { useContext } from "react";
import { authContext } from "../AuthProvider/MyAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    console.log(location.pathname);
    if(user){
        return children;
    }
    
        return <Navigate state={location.pathname} to="/login"></Navigate>
    
};

export default PrivateRoute;