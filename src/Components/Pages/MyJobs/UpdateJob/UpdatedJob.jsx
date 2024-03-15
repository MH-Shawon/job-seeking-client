import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedJob = () => {
  const updateJob = useLoaderData();

  const {
    _id,
    pictureUrl,
    jobTitle,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPostingDate,
    applicationDeadline,
    jobApplicantsNumber,
  } = updateJob;

  const handleUpdateJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const picture = form.picture.value;
    const title = form.title.value;
    const category = form.category.value;
    const details = form.details.value;
    const salary = form.salary.value;
    const applicants = form.applicants.value;
    const posting = form.posting.value;
    const deadline = form.deadline.value;


    const update = {
      picture,
      title,
      category,
      details,
      salary,
      applicants,
      posting,
      deadline,
    };

    // send data to the server
    fetch(`http://localhost:5000/api/v1/updateJobs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Update Coffee:</h2>
      <form onSubmit={handleUpdateJob}>
        {/* form picture and title row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <label className="input-group">
              <input
                type="img"
                name="picture"
                defaultValue={pictureUrl}
                placeholder="Picture URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                defaultValue={jobTitle}
                placeholder="Job Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={jobCategory}
                placeholder="Job Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <textarea
                className="input input-bordered w-full"
                name="details"
                type="text"
                placeholder="Description"
                defaultValue={jobDescription}
              ></textarea>
            </label>
          </div>
        </div>
        {/* form salary and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="salary"
                defaultValue={salaryRange}
                placeholder="Salary Range"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Applicants</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                name="applicants"
                type="number"
                placeholder="Applicants Number"
                defaultValue={jobApplicantsNumber}
              ></input>
            </label>
          </div>
        </div>

        {/* job posting and deadline row  */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Posting Date</span>
            </label>

            <label className="input-group">
              <input
                type="date"
                name="posting"
                defaultValue={jobPostingDate}
                placeholder="Salary Range"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Application Deadline Date</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                name="deadline"
                type="date"
                placeholder="Application Deadline Date"
                defaultValue={applicationDeadline}
              ></input>
            </label>
          </div>
        </div>
        <div className="md:flex mb-8"></div>
        <input
          type="submit"
          value="Update Product"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline btn btn-block"
        />
      </form>
    </div>
  );
};
export default UpdatedJob;
