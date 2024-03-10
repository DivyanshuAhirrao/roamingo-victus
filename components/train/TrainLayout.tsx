import React from "react";
import TrainCard from "./TrainCard";
import GoBack from "../GoBack";

const TrainLayout = () => {
  return (
    <main className="w-[100%] flex gap-1">
      <section className="lg:block sm:hidden xs:hidden w-[20%]  bg-slate-700"></section>
      <section className=" lg:w-[80%] xs:w-[100%] bg-slate-100 flex flex-col gap-6 justify-center items-center py-10">
        <GoBack />
        <TrainCard />
        <TrainCard />
        <TrainCard />
        <TrainCard />
      </section>
    </main>
  );
};

export default TrainLayout;
