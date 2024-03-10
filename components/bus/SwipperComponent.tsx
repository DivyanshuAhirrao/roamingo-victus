import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwipperComponent() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time: any, progress: any) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        style={{ scale: "0.99" }}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1007530412/photo/motivational-and-inspirational-quote.jpg?s=612x612&w=0&k=20&c=4F0_8Zsx9DnxrzLQeaR9MwemGRS5e_pxuzjI3wNLu7M="
            alt="pic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1131877134/photo/travel-illustration-worlds-famous-landmarks-and-tourist-destinations-elements-in-colorful.jpg?s=612x612&w=0&k=20&c=5re_53AkB99-KSBR9a-8g2BvyHHRx_LAY04LHpMzQ10="
            alt="pics"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1045172440/vector/lets-go-travel-inscription-quote.jpg?s=612x612&w=0&k=20&c=63yEXdRAkMNZeMd5gWYaVsO_0kZWhZY58InofvHsM7E="
            alt="img-sample"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1342229191/photo/a-lake-in-the-shape-of-the-worlds-continents-in-the-middle-of-untouched-nature-a-metaphor-for.jpg?s=612x612&w=0&k=20&c=PFwVm05zW04BGBUN9gtSdJpDQVIPcRQuBDWSA4c9EVw="
            alt="img-sample"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
            alt="img-sample"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1358745090/photo/many-waterfalls-flowed-with-plastic-roads-in-the-forest-art-landscape-paintings.jpg?s=612x612&w=0&k=20&c=cvQKG2clIzaDWgjM48OLM341bR8Qg7HLvFfhlsFGm7Y="
            alt="img-sample"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/503874284/photo/berlin-skyline-with-spree-river-at-sunset-germany.jpg?s=612x612&w=0&k=20&c=gnrw-SQQq9Niao93SU4djAgGXi-5LRBNkSRiwwX96Tk="
            alt="img-sample"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/952375942/photo/westminster-parliament-big-ben-and-the-thames-with-blue-sky.jpg?s=612x612&w=0&k=20&c=aDsTm010b3iqggED8ygVA2KijYE6gE1ubvh4tUTR79s="
            alt="img-sample"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/628365610/photo/vltava-river-and-charles-bridge-in-prague.jpg?s=612x612&w=0&k=20&c=SNKczvBcP0ND6sgWS589cIc0aTuOTcNLv-3QgFBILFg="
            alt="img-sample"
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
