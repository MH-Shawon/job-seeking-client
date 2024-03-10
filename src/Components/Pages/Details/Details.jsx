import { useLoaderData } from "react-router-dom";

const Details=()=>{
    const job = useLoaderData();
    console.log(job)
    return(
        <div>
             <p> HELLO I Am Details</p>
        </div>
    )}
export default Details;