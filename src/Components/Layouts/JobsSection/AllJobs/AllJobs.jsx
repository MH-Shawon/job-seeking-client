import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";


const AllJobs = () => {
    const [allJob, setAllJob] = useState([])

    useEffect(() => {
        fetch('json/allJobs.json')
            .then(res => res.json())
            .then(data => setAllJob(data))
    }, [])
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredJobs = allJob.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="">
            <div className="flex justify-center mt-2 text-black!">
                <input
                    type="text"
                    placeholder="Search by Job Title..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input border-black border rounded-md px-3 py-2 focus:outline-none placeholder-slate-700"
                />
            </div>


            <table className="mx-auto">
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Job Posting Date</th>
                        <th>Application Deadline</th>
                        <th>Salary Range</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredJobs.map((job) => (
                        <tr key={job.jobTitle}>
                            <td>{job.name}</td>
                            <td>{job.jobTitle}</td>
                            <td>{job.postedDate}</td>
                            <td>{job.applicationDeadline}</td>
                            <td>{`${job.salaryRange.min} - ${job.salaryRange.max} ${job.salaryRange.unit}`}</td>
                            <td>
                                <button className="btn btn-outline btn-success">Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default AllJobs;
