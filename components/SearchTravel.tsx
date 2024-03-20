"use client";
import React, { useState } from "react";
import SearchCity from "./travelCard/SearchCity";
const SearchTravel = () => {
  const [state, setState] = useState({
    start_city: "",
    end_city: "",
  });

  const [distance, setDistance] = useState(null);

  const { start_city, end_city } = state;

  const fetchData = async (scity: string, ecity: string) => {
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(start_city);
    console.log(end_city);
    fetchData(start_city, end_city);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <section className="w-[100%] h-[300px] flex flex-col justify-center items-center">
        <SearchCity />
        {/*<form onSubmit={handleSubmit}>
          <article className="flex gap-3">
            <input
              type="text"
              id="scity"
              name="start_city"
              value={start_city}
              placeholder="Enter Start City"
              onChange={handleChange}
            />
            <input
              type="text"
              id="ecity"
              name="end_city"
              value={end_city}
              placeholder="Enter Destination"
              onChange={handleChange}
            />

            <button className="px-5 py-1 bg-green-300 rounded-md ">Search</button>
          </article>
        </form>
        <div className="pt-10">
          <h2>Distance : <span className="text-red-600 font-bold">{distance}</span></h2>
        </div>*/}
      </section>
    </>
  );
};

export default SearchTravel;
