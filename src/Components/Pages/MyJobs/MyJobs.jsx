import { useState } from "react";

import JobCard from "./JobCard";

import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const MyJobs = () => {
  const jobs = useLoaderData();

  const [remainingJobs, setRemainingJObs] = useState(jobs);

  const handleDelete = (_id) => {
     
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        fetch(`http://localhost:5000/api/v1/addJobs/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {

          if (data.deletedCount > 0) {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = remainingJobs.filter(
              (exist) => exist._id !== _id
            );
            setRemainingJObs(remaining);
          }
        });
    });
  };

  return (
    <div>
      <p className="text-center"> MyJobs:{remainingJobs.length}</p>
      {remainingJobs.map((job) => (
        <JobCard key={job._id} job={job} handleDelete={handleDelete}></JobCard>
      ))}
    </div>
  );
};
export default MyJobs;
