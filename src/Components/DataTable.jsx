import React, { useState } from "react";

const DataTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowPerPage,setRowPerPage] = useState(5)

  const totalPages = Math.ceil(data.time.length / rowPerPage);
  const paginatedData = data.time.slice(page * rowPerPage, (page + 1) * rowPerPage);

  return (
    <section className="h-[70vh] mx-auto my-4 max-w-7xl">
        <label htmlFor="" > Select rows per page </label>
      <select name="" className="px-4 py-2 rounded-md" id="" onChange={(e) => setRowPerPage(parseInt(e.target.value))}>
        
        <option value="5" defaultValue>5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <table className="w-full mt-4 border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Date</th>
            <th className="px-4 py-2 border border-gray-300">Mean Temperature (°C)</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((time, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-300">{time}</td>
              <td className="px-4 py-2 border border-gray-300">{data.temperature_2m_mean[page * rowPerPage + index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 rounded-md"
        >
          Previous
        </button>
        <div className="flex flex-wrap gap-2 px-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              className={`px-3 py-1 rounded-md ${
                page === index ? "" : "bg-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, Math.floor(data.time.length / rowPerPage)))}
          className="px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default DataTable;
