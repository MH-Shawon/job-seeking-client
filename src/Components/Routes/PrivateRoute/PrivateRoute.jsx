import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../../Spinner/LoadingSpinner";






const PrivateRoute=({children})=>{
const {user, loading} = useContext(AuthContext);
const location = useLocation();
    if (loading) {
        return <LoadingSpinner />;
    }
if(user){
    return children;
}
    
    return <Navigate  state={location.pathname} to='/login' />
}
export default PrivateRoute;