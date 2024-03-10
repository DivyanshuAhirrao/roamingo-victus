'use client'
import React from "react";
import goback from "./media/goback.json";
import Link from "next/link";
import Lottie from "lottie-react";

const GoBack = () => {
  return <>
  <Link href='/'>
    <article className="absolute h-[50px] w-[150px] top-0 right-2 flex">
        <Lottie animationData={goback} className="h-[150%] relative bottom-4 left-5"/>
        <h1 className="font-mono relative top-2 underline underline-offset-2 text-[#1d7e83] font-semibold"> GoBack </h1>
    </article>
  </Link>
  </>;
};

export default GoBack;
