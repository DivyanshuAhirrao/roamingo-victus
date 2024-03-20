import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const SearchCity = () => {
  const [city, setCity] = useState<string[]>([]);
  const [startCity, setStartCity] = useState<string | null>(null); // Changed initial value to null
  const [endCity, setEndCity] = useState<string | null>(null);
  const [distance, setDistance] = useState(null);

  const fetchData = async (scity: string | null, ecity: string | null) => {
    try {
      const response = await fetch(
        `https://main--romingo-backend-express.netlify.app/.netlify/functions/api/journey/${scity}/${ecity}/bus/grade%20a`
      );
      const data = await response.json();
      console.log(data);

      setDistance(data.distance);
    } catch (error) {
      console.log(error);
    }
  };

  const cityFetcher = async () => {
    try {
      const response = await fetch(
        `https://main--romingo-backend-express.netlify.app/.netlify/functions/api/city`
      );
      const data = await response.json();
      //   console.log(data);
      setCity(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(startCity);
    console.log(endCity);
    fetchData(startCity, endCity);
  };

  useEffect(() => {
    cityFetcher();
  }, []);

  return (
    <div className="h-[230px] w-[100%] flex flex-col justify-center items-center gap-4">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Autocomplete
          value={startCity}
          onChange={(event: any, newValue: string | null) => {
            setStartCity(newValue || "");
          }}
          sx={{ width: 300 }}
          options={city}
          renderInput={(params) => (
            <TextField
              {...params}
              label="From"
              variant="outlined"
              sx={{textAlign:"center"}}
             
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <Autocomplete
          value={endCity}
          onChange={(event: any, newValue: string | null) => {
            setEndCity(newValue || "");
          }}
          sx={{ width: 300 }}
          options={city}
          renderInput={(params) => (
            <TextField
              {...params}
              label="To"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <button type="submit" className="px-5 py-1 bg-green-300 rounded-md">
          Search
        </button>
      </form>

      <div className="pt-10">
        <h2>
          Distance : <span className="text-red-600 font-bold">{distance}</span>
        </h2>
      </div>
    </div>
  );
};

export default SearchCity;
