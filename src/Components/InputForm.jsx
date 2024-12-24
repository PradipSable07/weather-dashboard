import React, { useState } from "react";
import { toast } from "sonner";

const InputForm = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState("25.276987");
  const [longitude, setLongitude] = useState("55.296249");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!latitude || !longitude || !startDate || !endDate) {
     toast.error("Please fill in all fields.");
      return;
    }
    onSubmit({ latitude, longitude, startDate, endDate });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 mx-auto md:grid-cols-3 lg:grid-cols-5 max-w-7xl">
      <div >
        <label className="block text-sm font-medium">Set Latitude</label>
        <input
          type="number"
          step="any"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter latitude"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Set Longitude</label>
        <input
          type="number"
          step="any"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter longitude"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Set Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Set End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="flex items-center justify-center "> 
        
      <button type="submit" className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md">
        Get Weather Data
      </button>
      </div>
    </form>
  );
};

export default InputForm;
