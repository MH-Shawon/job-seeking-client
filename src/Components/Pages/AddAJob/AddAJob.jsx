import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { AuthContext } from "../../Providers/Auth/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddAJob = () => {
  const { user } = useContext(AuthContext);
  const defaultUserEmail = user?.email || "";
  const [formData, setFormData] = useState({
    pictureUrl: "",
    jobTitle: "",
    loggedInUserEmail: defaultUserEmail,
    jobCategory: "",
    salaryRange: "",
    jobDescription: "",
    jobPostingDate: "",
    applicationDeadline: "",
    jobApplicantsNumber: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/addjob",
        formData
      );
      console.log("Job added successfully!", response.data);
      if (response.data.acknowledged) {
        toast.success("Job added successfully!");
        setFormData({
          pictureUrl: "",
          jobTitle: "",
          loggedInUserEmail: "",
          jobCategory: "",
          salaryRange: "",
          jobDescription: "",
          jobPostingDate: "",
          applicationDeadline: "",
          jobApplicantsNumber: 0,
        });
      }
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Helmet>
        <title>Job Seeking | Add A Jobs</title>
      </Helmet>
      <h1 className="text-3xl font-semibold mb-4 text-center">Add A Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block mb-1">Job Banner URL:</label>
            <input
              type="text"
              name="pictureUrl"
              value={formData.pictureUrl}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block mb-1">Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block mb-1">Logged In User Email:</label>
            <input
              type="text"
              name="loggedInUserEmail"
              defaultValue={formData.loggedInUserEmail}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block mb-1">Job Category:</label>
            <select
              name="jobCategory"
              value={formData.jobCategory}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="">Select Category</option>
              <option value="On Site">On Site</option>
              <option value="Remote">Remote</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block mb-1">Salary Range:</label>
            <input
              type="text"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block mb-1">Job Description:</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block mb-1">Job Posting Date:</label>
            <input
              type="date"
              name="jobPostingDate"
              value={formData.jobPostingDate}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block mb-1">Application Deadline:</label>
            <input
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1">Job Applicants Number:</label>
          <input
            type="number"
            name="jobApplicantsNumber"
            value={formData.jobApplicantsNumber}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-1/3 font-semibold text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAJob;
