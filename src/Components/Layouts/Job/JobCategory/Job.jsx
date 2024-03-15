import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/Auth/AuthProvider";
import toast from "react-hot-toast";

const Job = ({ job }) => {
  const { user } = useContext(AuthContext);
 
  const {
    _id,
    name,
    jobTitle,
    postedDate,
    applicationDeadline,
    salaryRange,
    category,
  } = job;

  const handleDetailsClick = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
      <Navigate to="/login" />;
    } else {
      <Navigate to={`/details/${category}`} />;
    }
  };

  return (
    <div>
      <div className="flex flex-col bg-gradient-to-r from-gray-800 via-teal-900 to-blue-900 text-white rounded-xl shadow-md max-w-[20rem] h-[28rem] p-8 mb-5 overflow-hidden">
        <div className="relative pb-8 mb-8 text-center text-gray-700 bg-transparent border-b border-white/10">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
            Posted By: {name}
            <br />
          </p>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-white mt-2">
             Category: {category}
          </p>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                Job-Title: {jobTitle}
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                Posting_Date: {postedDate}
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                Deadline: {applicationDeadline}
              </p>
            </li>

            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                Salary: ${salaryRange.min} - ${salaryRange.max}
              </p>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link to={`/details/${_id}`}>
            <button
              onClick={handleDetailsClick}
              className="font-bold text-center uppercase text-black transition-all disabled:opacity-50 disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 hover:bg-gray-200 focus:outline-none focus:ring focus:border-transparent active:bg-gray-300 transform hover:scale-105 focus:scale-105 active:scale-100"
              type="button"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Job;
