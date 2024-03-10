import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import HoverRating from "../Rating";
import Link from "next/link";
import CartModal from "../cart/CartModal";

const BusCard = () => {
  const helpers = ["Policy", "Aminities", "Photos", "Pickup & Drop", "Reviews"];

  const day = new Date().getDay();
  const date = `${day} MAR`;
  return (
    <article className="overflow-hidden h-[16vw] w-[90%] bg-white border-[1.5px] border-red-200 hover:border-neutral-700 transition-all duration-200 rounded-xl shadow-md">
      <div className="h-[75%] w-[100%] flex">
        <aside className="w-[30%] h-[100%] flex flex-col justify-between pl-6 py-6">
          <div>
            <h5 className="text-red-400 text-[11px] font-semibold">
              {" "}
              via Mumbai{" "}
            </h5>
            <h1 className="font-bold text-[19px] text-neutral-700 drop-shadow-md">
              {" "}
              RoaminGo Travels Ltd.{" "}
            </h1>
            <h6 className="text-[12px] text-neutral-500">
              {" "}
              Superior / AC-Sleeper / 1+2{" "}
            </h6>
          </div>
          <aside>
            {" "}
            <HoverRating />{" "}
          </aside>
        </aside>
        <aside className="w-[50%] h-[100%] flex justify-center py-12">
          <article className="flex">
            <h4 className="scale-125 text-neutral-900 relative top-[5px] right-2">
              08:30
            </h4>
            <h1 className="text-neutral-700"> {date} </h1>{" "}
            <fieldset className="text-slate-500">
              <legend>
                {"<"}----- 11hrs 30mins -----{">"}
              </legend>
            </fieldset>
            <h1 className="text-neutral-700"> {date} </h1>
            <h4 className="scale-125 text-neutral-900 relative top-[5px] left-2">
              10:30
            </h4>
          </article>
        </aside>
        <aside className="w-[20%] h-[100%] flex flex-col justify-center">
          <div className="w-[100%] h-[100%] flex flex-col items-end pr-3 pt-10">
            <article className="flex">
              <span className="px-2 bg-red-300 rounded-md scale-75 ">OFF</span>{" "}
              <del className="text-neutral-500 scale-[0.8] relative top-[2px] right-1 ">
                {" "}
                <i> 2100 </i>{" "}
              </del>
            </article>
            <h2 className="font-bold text-[18px]"> Rs. 1860/-</h2>
          </div>
          <p className="text-end pr-2 pb-1 scale-90 text-neutral-700">
            {" "}
            <span className="font-bold text-emerald-600"> 21 </span> Seats left{" "}
          </p>
        </aside>
      </div>
      <aside className="h-[25%] border-t-2">
        <div className="h-[100%] flex justify-between px-4">
          <article className="h-[100%] flex items-center">
            <div className="flex gap-7">
              {helpers.map((e, i) => {
                return (
                  <div key={i} className="flex text-neutral-600">
                    <h1 className="text-[12px]">{e}</h1>{" "}
                    <span className="pl-[1px] scale-75 ">
                      <IoIosArrowDown />
                    </span>
                  </div>
                );
              })}
            </div>
          </article>
          <article className="h-[100%] flex items-center ">
            <button className="scale-95 font-semibold text-neutral-800 text-[15px] px-3 py-1 bg-[#a3b5e9] hover:bg-[#7189cf] transition-all duration-100 cursor-pointer rounded-md">
              <CartModal />
            </button>
          </article>
        </div>
      </aside>
    </article>
  );
};

export default BusCard;
