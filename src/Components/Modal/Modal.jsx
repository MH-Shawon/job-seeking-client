import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Modal = ({ user, deadline, jobTitle, category }) => {
  const [resumeLink, setResumeLink] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleApply = (e) => {
    e.preventDefault();
    const currentTimestamp = Date.now();

    if (currentTimestamp > deadline) {
      toast.error("Application deadline has passed. You cannot apply.");
      return;
    }

    // Check if the user is the employer
    if (user.isEmployer) {
      toast.error("Employers can't apply for their own job.");
      return;
    }
    setIsModalOpen(false);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const job = {
      name,
      email,
      resumeLink,
      jobTitle,
      category
    };
    

    axios.post("http://localhost:5000/api/v1/appliedJob", job).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        toast.success("Data posted to MongoDB successfully!");
      }
    });
  };
  return (
    <div>
      <button
        className="bg-green-500 text-white p-2 md:p-4 rounded-md hover:bg-green-600 transition-colors duration-300"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        {" "}
        Apply Now
      </button>
      {isModalOpen && (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

          <div className="modal-box overflow-hidden">
            <div className="modal-content">
              <form
                onSubmit={handleApply}
                method="dialog"
                className="flex flex-col items-center"
              >
                <h2 className="text-3xl font-bold mb-2 text-white bg-blue-500 p-3 rounded-md shadow-md">
                  {jobTitle}
                </h2>
                <div className="mb-2 w-full">
                  <label
                    htmlFor="userName"
                    className="text-sm font-medium text-gray-700"
                  >
                    User Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.displayName}
                    readOnly
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>

                <div className="mb-2 w-full">
                  <label
                    htmlFor="userEmail"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    readOnly
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>

                <div className="mb-2 w-full">
                  <label
                    htmlFor="resumeLink"
                    className="text-sm font-medium text-gray-700"
                  >
                    Resume Link:
                  </label>
                  <input
                    type="url"
                    name="resume"
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                    required
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
                <div className="mb-2 w-full">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-700"
                  >
                    Category:
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={category}
                    readOnly
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>

                <div className="modal-action w-full">
                  <button
                    type="submit"
                    className="btn bg-blue-500 text-white hover:bg-blue-600 w-full"
                  >
                    Submit Application
                  </button>
                </div>

              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
export default Modal;
