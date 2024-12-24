import React, { useState } from "react";
import InputForm from "./Components/InputForm";
import WeatherGraph from "./Components/WeatherGraph";
import DataTable from "./Components/DataTable";
import { Toaster } from "sonner";
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async ({ latitude, longitude, startDate, endDate }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&timezone=auto`
      );
      const data = await response.json();

      console.log(data);
      

      if (data.error) throw new Error(data.error);

      setWeatherData(data.daily);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen p-6 mx-auto overflow-x-hidden">
      <h1 className="my-4 text-xl font-bold text-center md:text-4xl">Weather Dashboard</h1>
      <InputForm onSubmit={fetchWeatherData} />
      {loading && <div className="w-10 h-10 mx-auto my-10 border loader animate-spin"></div>}
      {error && <p className="mx-auto text-red-500 ">{error}</p>}
      {weatherData && (
        <>
          <WeatherGraph data={weatherData} />
          <DataTable data={weatherData} />
        </>
      )}

      <Toaster position="top-right" richColors closeButton={true} theme="dark"/>
    </div>
  );
};

export default App;
