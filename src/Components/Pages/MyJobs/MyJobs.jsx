import { useContext, useEffect, useState } from "react";

import JobCard from "./JobCard";

import Swal from "sweetalert2";

import { AuthContext } from "../../Providers/Auth/AuthProvider";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [remainingJobs, setRemainingJobs] = useState([]);
  useEffect(() => {
    loadJobs();
  }, []);
  const loadJobs = () => {
    // Construct the URL with query parameters
    const url = `https://job-seeking-server-theta.vercel.app/api/v1/addJobs?email=${user.email}`;

    axios.get(url, { withCredentials: true })
      .then((data) => {
        console.log(data.data)
        setRemainingJobs(data.data);
      })

    /* when using axios use withCredentials
     *when use fetch use credentials */

    // fetch(url, {
    //   credentials: 'include'
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setRemainingJobs(data);
    //   })

  };


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
      if (result.isConfirmed) {
        fetch(`https://job-seeking-server-theta.vercel.app/api/v1/addJobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // Remove the deleted job from the state
              setRemainingJobs((prevJobs) =>
                prevJobs.filter((job) => job._id !== _id)
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting job:", error);
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Job Seeking | My Jobs</title>
      </Helmet>
      <p className="text-center">
        {`${user.displayName}'s`} Jobs: {remainingJobs.length}
      </p>
      {remainingJobs.map((job) => (
        <JobCard key={job._id} job={job} handleDelete={handleDelete}></JobCard>
      ))}
    </div>
  );
};

export default MyJobs;
