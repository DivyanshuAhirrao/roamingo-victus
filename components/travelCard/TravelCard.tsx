"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./TravelCardComponents";
import Lottie from "lottie-react";
import Link from "next/link";


export function TravelCard({ btn, href, img }: { btn: string; href: string; img: any }) {
  return (
    <CardContainer className="xs:h-[65vw] xs:w-[85vw] sm:h-[15vw] sm:w-[15vw] border-2 ">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] rounded-xl p-6 ">
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300 shadow-md shadow-emerald-900"
        >
          "Traveling – it leaves you speechless, then turns you into a
          storyteller."
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Lottie animationData={img} className=" xs:h-[47vw] sm:h-[10vw]" />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white "
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl  bg-white text-black text-xs font-bold"
          >
             <Link href={href}> {btn} </Link> 
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
