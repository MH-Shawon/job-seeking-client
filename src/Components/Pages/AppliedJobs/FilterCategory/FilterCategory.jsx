const FilterCategory = ({ data, selectedCategory }) => {
  const filteredData = data.filter((job) => {
    const category = job.category ? job.category.toLowerCase() : "";
    return (
      selectedCategory === "All" || category === selectedCategory.toLowerCase()
    );
  });
  return (
    <table className="w-full border mt-4 text-left table-auto min-w-max shadow-lg">
      <thead>
        <tr className="bg-blue-400 text-center">
          <th className="p-4 border border-blue-500 bg-blue-300">N0.</th>
          <th className="p-4 border border-blue-500 bg-blue-300">Job Title</th>
          <th className="p-4 border border-blue-500 bg-blue-300">Job Category</th>
          <th className="p-4 border border-blue-500 bg-blue-300">Resume Link</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr
            key={item._id}
            className={`text-center ${index % 2 === 0 ? "bg-blue-100" : "bg-white hover:bg-blue-100"}`}
          >
            <td className="p-4 border-b border-l border-blue-400">{index + 1}</td>
            <td className="p-4 border-b border-blue-400">{item.jobTitle}</td>
            <td className="p-4 border-b border-blue-400 capitalize">{item.category}</td>
            <td className="p-4 border-b border-blue-400  border-r">
              <a
                href={item.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {item.resumeLink}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>


  );
};
export default FilterCategory;
