import { Link } from "react-router-dom";

const JobCard = ({ job, handleDelete }) => {
    
    const {
        _id,
        pictureUrl,
        jobTitle,
        loggedInUserName,
        jobCategory,
        salaryRange,
        jobDescription,
        jobPostingDate,
        applicationDeadline,
        jobApplicantsNumber,
    } = job;
    return (
        <div>
            <div className="relative mx-auto h-36  w-full max-w-[36rem]  rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-xl">
                <div className=" flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    <img
                        src={pictureUrl}
                        alt="Tania Andrew"
                        className="relative h-[58px] w-[58px] rounded mt-10"
                    />
                    <div className="text-center mt-7">
                        <h5 className=" font-poppins text-lg antialiased leading-snug tracking-normal text-blue-gray-900">
                            {jobTitle}
                        </h5>
                        <p className=" font-poppins text-base antialiased font-light leading-relaxed text-blue-gray-900">
                           Category: {jobCategory}
                        </p>
                        <p className=" font-poppins text-base antialiased font-light leading-relaxed text-blue-gray-900">
                           Salary: {salaryRange}
                        </p>
                    </div>

                    <div className=" mx-auto mt-10">
                        <div className="my">
                            <p className=" font-poppins text-base antialiased font-light leading-relaxed text-blue-gray-900">
                               P.Date: {jobPostingDate}
                            </p>
                            <p className=" font-poppins text-base antialiased font-light leading-relaxed text-blue-gray-900">
                              DeadLine:  {applicationDeadline}
                            </p>
                            <p className=" font-poppins text-base antialiased font-light leading-relaxed text-blue-gray-900">
                               Applicants: {jobApplicantsNumber}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-7 pr-5 space-y-2 flex-col items-center justify-center">
                            <Link
                                to={`/updateJob/${_id}`}
                                className="btn btn-outline btn-success"
                            >
                                Update
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn btn-outline btn-error"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default JobCard;
