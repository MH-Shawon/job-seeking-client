import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen">
        <ClipLoader css={override} size={60} color={'#36D7B7'} />
    </div>
);


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