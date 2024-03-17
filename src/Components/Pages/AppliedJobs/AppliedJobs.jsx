import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Auth/AuthProvider";
import FilterCategory from "./FilterCategory/FilterCategory";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { user } = useContext(AuthContext);
  const URL = `http://localhost:5000/api/v1/appliedJobs?email=${user.email}`;

  useEffect(() => {
    axios.get(URL, {withCredentials:true})
      .then((data) => {
        console.log(data)
          setAppliedJobs(data.data)})

    /* when using axios use withCredentials
    *when use fetch use credentials */
   
    // fetch(URL, {
    //   credentials: 'include'
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setAppliedJobs(data);
    //   });
  }, [URL]);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="p-4">
      <Helmet>
        <title>Job Seeking | Applied Jobs</title>
      </Helmet>

      <div className="flex justify-between px-24">


        <h2 className="text-2xl font-semibold mb-2 pl-4">Applied Jobs</h2>

        <div className="relative h-11 w-72 min-w-[200px]">
          <select value={selectedCategory} onChange={handleChange}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">

            <option value="All">All Categories</option>
            <option value="Part-time">Part-time</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
          <label
            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

            Select a Category
          </label>
        </div>
      </div>


      <div className="px-24">
        <FilterCategory data={appliedJobs} selectedCategory={selectedCategory} />
      </div>


    </div>
  );
};
export default AppliedJobs;
