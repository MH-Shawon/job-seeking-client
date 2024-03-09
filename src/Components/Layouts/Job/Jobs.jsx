import "react-tabs/style/react-tabs.css";
import Job from "./JobCategory/Job";

const Jobs=({filteredJobs})=>{
    
    return(
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pl-20 mt-5">
            {
            filteredJobs.map((job,index)=><Job key={index} job={job}></Job>)
            }
        </div>
    )}
export default Jobs;