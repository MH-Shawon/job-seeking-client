import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Auth/AuthProvider";
import Modal from "../../Modal/Modal";



const Details = () => {
  const job = useLoaderData();
  console.log(job)
  const {user} = useContext(AuthContext);
  

  
  const {
    jobTitle,
    category,
    postedDate,
    applicationDeadline,
    salaryRange,
    applicants,
    viewDetails,
  } = job;


  // Additional sections from outside the job data
  const companyBenefits = [
    "Health insurance",
    "Flexible work hours",
    "Professional development",
  ];
  const companyDescription =
    "Join our innovative and dynamic team committed to making a positive impact on the world.";

  return (
    <div className="details-card-container flex flex-col items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 md:p-8">
      <div className="details-card bg-white p-4 md:p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 w-full md:max-w-md">
        <div className="name-section bg-purple-200 p-2 md:p-4 rounded-lg text-center">
          <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-purple-800">
                      {user.displayName}
          </h2>
          <p className="text-sm md:text-base text-gray-600">{jobTitle}</p>
        </div>

        <div className="viewDetails-section view-details-container transition-transform duration-300 transform hover:scale-105 mt-2 md:mt-4">
          <div className="view-details-content p-2 md:p-4 rounded-lg bg-blue-600 text-white text-sm md:text-base text-center hover:bg-blue-800 transition-colors duration-300">
            {viewDetails}
          </div>
        </div>

        <div className="details-section bg-gray-100 p-2 md:p-4 rounded-lg mt-2 md:mt-4">
          <h3 className="text-base md:text-lg mb-2 md:mb-4">Job Details</h3>
          <p>
            <strong className="text-blue-500">Posted:</strong> {postedDate}
          </p>
          <p>
            <strong className="text-blue-500">Deadline:</strong>{" "}
            {applicationDeadline}
          </p>
          <p>
            <strong className="text-blue-500">Salary Range:</strong> $
            {salaryRange.min} - ${salaryRange.max}
          </p>
          <p>
            <strong className="text-blue-500">Applicants:</strong> {applicants}
          </p>
        </div>

        <div className="benefits-section bg-pink-100 p-2 md:p-4 rounded-lg mt-2 md:mt-4">
          <h3 className="text-base md:text-lg mb-2 md:mb-4">
            Company Benefits
          </h3>
          <ul className="list-disc pl-4 md:pl-6">
            {companyBenefits.map((benefit, index) => (
              <li key={index} className="text-sm md:text-base">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-section bg-yellow-100 p-2 md:p-4 rounded-lg mt-2 md:mt-4">
          <h3 className="text-base md:text-lg mb-2 md:mb-4">
            About the Company
          </h3>
          <p className="text-sm md:text-base text-gray-700">
            {companyDescription}
          </p>
        </div>
        {/* <ApplyBtn /> */}
        <div className="apply-now-button mt-4 text-center">
          
          <Modal user={user}
            deadline={applicationDeadline}
            jobTitle={jobTitle}
            category={category} />
        </div>
        
      </div>
    </div>
  );
};

export default Details;
