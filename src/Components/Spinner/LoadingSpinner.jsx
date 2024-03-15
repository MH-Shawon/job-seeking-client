import { ClipLoader } from "react-spinners";
import { css } from '@emotion/react';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const LoadingSpinner=()=>{
    return(
        <div className="flex justify-center items-center h-screen">
            <ClipLoader css={override} size={60} color={'#36D7B7'} />
        </div>
    )}
export default LoadingSpinner;