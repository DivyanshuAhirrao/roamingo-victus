"use client";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import BookingLayout from "@/components/booking/BookingLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
// import { database } from './firebaseConfig';
// import { get , ref } from "firebase/database";
export default function Home() {

  // const[users, setUsers]= useState<any>([]);

  useEffect(() => {
    // const usersRef = ref(database , 'users');
    // get(usersRef).then((snapshot)=> {
    //   if(snapshot.exists()){
    //     const busesArray = Object.entries(snapshot.val()).map(([id , data]:any)=>({
    //       id,
    //       ...data,
    //     })) ;
    //     setUsers(busesArray);
    //   }
    //   else{
    //     console.log("Data Not Found");
    //   }
    // }).catch((error)=>{
    //   console.error(error);
    // });

    AOS.init();
  }, []);
  return (
    <>

    {/* <div>
      {
        users.map((u:any)=>{
          return(
            <div key={u.id}>
              <h2>{u.title}</h2>
            </div>
          )
        })
      }
    </div> */}

      <div data-aos="flip-up" data-aos-duration="1000">
        <Hero />
      </div>
      <div data-aos="zoom-out-up" data-aos-duration="1000">
        <BookingLayout />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <Camp />
      </div>
      <div data-aos="zoom-out-up" data-aos-duration="1000">
        <Guide />
      </div>
      <div data-aos="flip-up" data-aos-duration="1000">
        <Features />
      </div>
      <div
        data-aos="zoom-out-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <GetApp />
      </div>

    </>
  );
}
