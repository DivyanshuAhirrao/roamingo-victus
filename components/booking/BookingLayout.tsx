import React from "react";
import flight from "../media/flight.json";
import bus from "../media/bus.json";
import train from "../media/train.json";
import SwipperComponent from "../bus/SwipperComponent";
import { TravelCard } from "../travelCard/TravelCard";
import SwiperCards from "../SwiperCards";

const BookingLayout = () => {
  return (
    <>
      <main className="w-[100%] xs:py-3 sm:py-16 sm:px-16 xs:px-6 flex xs:flex-wrap sm:flex-nowrap gap-2">
        <aside className="w-[70%]">
          <article className="w-[100%] flex sm:flex-row xs:flex-col flex-wrap xs:gap-2 sm:gap-3 items-center">
            <TravelCard btn="FLIGHT" href="flight" img={flight} />
            <TravelCard btn="BUS" href="bus" img={bus} />
            <TravelCard btn="TRAIN" href="train" img={train} />
          </article>
        </aside>
        <aside
          className="xs:w-[100%] sm:w-[30%] sm:h-[27vw] xs:h-[69vw]"
          id="swiper-box"
        >
          <SwiperCards />
            <h1 className="xs:text-[15px] sm:text-[20px] font-mono font-bold uppercase text-neutral-600 text-center pt-4">
             <i>
              *** Most Booked ***</i>
            </h1>
        </aside>
      </main>
    </>
  );
};

export default BookingLayout;

// <section className="w-[88%] h-[28vw] flexCenter">
//             <article className=" rounded-xl h-[7vw] w-[20vw] fixed top-20 border-[1px] border-neutral-900 flex justify-evenly bg-white">
//                 <button className="h-[100%] w-[30%] hover:scale-110 transition-all duration-200 -rotate-12">
//                     <Lottie animationData={flight} />
//                 </button>
//                 <button className="h-[100%] w-[30%] hover:scale-110 transition-all duration-200 border-x-[1px]" onClick={clickedBus}>
//                     <Lottie animationData={bus} />
//                 </button>
//                 <button className="h-[100%] w-[30%] hover:scale-110 transition-all duration-200" onClick={clickedTrain}>
//                     <Lottie animationData={train} />
//                 </button>
//             </article>
//             <article className="h-[80%] w-[90%] relative top-10 -z-10 border-[1px] border-neutral-900 flex" >

//             </article>
//         </section>
