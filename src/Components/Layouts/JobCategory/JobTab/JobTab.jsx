import "react-tabs/style/react-tabs.css";

const JobTab=({filteredJobs})=>{
    console.log(filteredJobs[0].name)
    
    return(
        <div className="text-center">
            {filteredJobs[0].name}
        </div>
    )}
export default JobTab;