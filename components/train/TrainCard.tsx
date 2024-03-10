import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import HoverRating from "../Rating";
import CartModal from "../cart/CartModal";
import { FaStar } from "react-icons/fa";

const TrainCard = () => {
  const helpers = ["Policy", "Aminities", "Photos", "Pickup & Drop", "Reviews"];

  const day = new Date().getDay();
  const date = `${day} MAR`;
  return (
    <>
      <article className="overflow-hidden xs:hidden sm:block h-[16vw] w-[90%] bg-white border-[1.5px] border-red-200 hover:border-neutral-700 transition-all duration-200 rounded-xl shadow-md">
        <div className="h-[75%] w-[100%] flex">
          <aside className="w-[30%] h-[100%] flex flex-col justify-between pl-6 py-6">
            <div>
              <h5 className="text-red-400 text-[11px] font-semibold">
                {" "}
                via Howrah{" "}
              </h5>
              <h1 className="font-bold text-[19px] text-neutral-700 drop-shadow-md">
                {" "}
                RoaminGo Shatabdi Express.{" "}
              </h1>
              <h6 className="text-[12px] text-neutral-500">
                {" "}
                First-Class / Second-Class / Sleeper Coach Non-AC{" "}
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
                <span className="px-2 bg-red-300 rounded-md scale-75 ">
                  OFF
                </span>{" "}
                <del className="text-neutral-500 scale-[0.8] relative top-[2px] right-1 ">
                  {" "}
                  <i> 2100 </i>{" "}
                </del>
              </article>
              <h2 className="font-bold text-[18px]"> Rs. 1860/-</h2>
            </div>
            <p className="text-end pr-2 pb-1 scale-90 text-neutral-700">
              {" "}
              <span className="font-bold text-emerald-600"> 21 </span> Seats
              left{" "}
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
              <button className="scale-95 text-neutral-800 font-semibold text-[15px] px-3 py-1 bg-[#a3b5e9] hover:bg-[#7189cf] transition-all duration-100 cursor-pointer rounded-md">
                <CartModal />
              </button>
            </article>
          </div>
        </aside>
      </article>

      
      {/* Mobile Screen Size  */}

      <article className="overflow-hidden xs:block sm:hidden h-[55vw] w-[90%] p-2 bg-white border-[1.5px] border-red-200 hover:border-neutral-700 transition-all duration-200 rounded-xl shadow-md">
        <aside className="w-[100%] h-[15%] flex justify-between items-center border-b-2">
          <img
            src="/roamingo.png"
            alt="logo"
            width={120}
            className="relative bottom-1"
          />
          <div
            id="bus-mobile-card"
            className="px-2 text-[13.45px] uppercase font-bold text-neutral-700"
          >
            Expresso
          </div>
        </aside>
        <aside className="w-[100%] h-[65%] bg-pink200 p-2">
          <div className="w-[100%] flex justify-between">
            <div>
              <h1 className="text-[16px] uppercase font-bold text-neutral-700">
                📍 Delhi -----{">"} Mumbai
              </h1>
              <article className="flex text-[12px] pl-3">
                <h4 className=" text-neutral-900 scale-110">08:30am</h4>
                <fieldset className="text-slate-500 px-2">
                  <legend>--- 11hrs 30mins ---</legend>
                </fieldset>
                <h4 className=" text-neutral-900 scale-110">10:30 pm</h4>
              </article>
            </div>
            <article className="bg-emerald-100 h-[9.5vw] w-[9vw] rounded-md p-[2px] border-[1px] border-slate-400">
              <aside className="bg-emerald-600 h-[4.5vw] w-[103%] rounded-md flex">
                <FaStar className="text-neutral-100 scale-[0.6]"/> <span className="font-sans font-semibold text-green-100 text-[10px] relative top-[1.5px] right-[1px]">4.5</span>
              </aside>
              <aside className="font-sans font-semibold text-green-700 text-[10px] text-center">478</aside>
            </article>
          </div>

          <article className="w-[100%] h-[70%] flex">
            <aside className="flex flex-col gap-3 pt-1">
              <div className="w-[120%] pl-2 pt-3">
                <h1 className="font-bold text-[16px] text-neutral-700 drop-shadow-md">
                  {" "}
                  R-Shatabdi Express.{" "}
                </h1>
                <h6 className="text-[12px] text-neutral-500">
                  {" "}
                  First-Class AC / Non-AC
                </h6>
              </div>
              <p className="scale-90 text-neutral-700 pr-2 relative bottom-[14px]">
                <span className="font-bold text-emerald-600"> 21 </span> Seats
                left{" "}
              </p>
            </aside>
            <aside className="w-[50%] h-[100%] flex flex-col justify-end">
              <div className="w-[100%] h-[100%] flex flex-col items-end justify-end relative bottom-1">
                <article className="flex">
                  <span className="px-2 bg-red-300 rounded-md scale-75 ">
                    OFF
                  </span>{" "}
                  <del className="text-neutral-500 scale-[0.8] relative top-[2px] right-1 ">
                    {" "}
                    <i> 2100 </i>{" "}
                  </del>
                </article>
                <h2 className="font-bold text-[18px]"> Rs. 1860/-</h2>
              </div>
            </aside>
          </article>
        </aside>
        <aside className="w-[100%] h-[20%] flex border-t-2">
          <aside className="h-[100%] w-[60%] flexCenter">
            <h1 className=" uppercase font-mono font-semibold text-neutral-600 text-[12px] font-mono">
              {" "}
              Min{" "}
              <span className="text-[13.5px] text-cyan-800 font-bold">
                {" "}
                10%{" "}
              </span>
              Off- <span className="text-red-800"> RoaminGo </span> Deal
            </h1>
          </aside>
          <aside className="h-[100%] w-[40%] flex justify-end">
            <button className="scale-95 font-semibold text-neutral-800 text-[15px] px-3 py-[2px] bg-[#a3b5e9] hover:bg-[#7189cf] transition-all duration-100 cursor-pointer rounded-md relative top-1">
              <CartModal />
            </button>
          </aside>
        </aside>
      </article>
    </>
  );
};

export default TrainCard;
