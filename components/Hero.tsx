"use client";

import React, { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import HoverRating from "./Rating";
import { DESTINY } from "@/constants/index";
import Lottie from "lottie-react";
import car from "./media/car.json";

const Hero = () => {
  const [place, setPlace] = useState("Mumbai");
  const [distance, setDistance] = useState("1960 Km");
  const [elevation, setElevation] = useState("0.223 Km");

  useEffect(() => {
    const runner = () => {
      let index = 0;
      const intervalId = setInterval(() => {
        setPlace(DESTINY[index].place);
        setDistance(DESTINY[index].distance);
        setElevation(DESTINY[index].elevation);
        index = (index + 1) % DESTINY.length;
      }, 3000);
      return () => clearInterval(intervalId);
    };
    runner();
  }, []);

  function redirectToStore(platform:string) {
    let storeURL;
    switch (platform) {
      case 'ios':
        storeURL = 'https://apps.apple.com/us/app/your-app-name/idYOUR_APP_ID';
        break;
      case 'android':
        storeURL = 'https://play.google.com/store/apps/details?id=your.package.name';
        break;
      default:
        console.error('Invalid platform specified');
        return;
    }
    window.open(storeURL, '_blank');
  }

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-35px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:text-[70px]">
          <span className="text-red-900"> RoaminGo </span>, India's Travel Guide
          ..!!
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <HoverRating />

          <p className="bold-16 lg:bold-20 text-blue-70">198k+</p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" onClick={()=>redirectToStore('ios')}/>
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <aside className="w-[50%]">
                <p className="regular-16 text-gray-20">Location</p>
                <p
                  className="bold-20 text-white"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  {place}{" "}
                </p>
              </aside>
              <aside className="w-[50%]">
                <Lottie animationData={car} className="w-24 relative bottom-8 left-5" />
              </aside>
            </div>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">{distance}</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">{elevation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
