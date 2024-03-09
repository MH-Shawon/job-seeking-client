const JobsTable = ({ job }) => {
  const {
    name,
    jobTitle,
    postedDate,
    applicationDeadline,
    salaryRange,
  } = job;
  return (
    <tr>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {name}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex flex-col">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {jobTitle}
          </p>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="w-max">
          <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
            <span className="">{postedDate}</span>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="w-max">
          <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
            <span className="">{applicationDeadline}</span>
          </div>
        </div>
      </td>

      <td className="p-4 border-b border-blue-gray-50">
        {salaryRange ? (
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            ${salaryRange.min} - ${salaryRange.max}
          </p>
        ) : (
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Salary Range Not Available
          </p>
        )}
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <button className="btn btn-outline btn-success" type="button">
          Details
        </button>
      </td>
    </tr>
  );
};
export default JobsTable;
