"use client";
import React, { useState } from "react";
import Left from "@/public/icons/Left arrow.svg"; // Assuming location of Left arrow.svg
import Right from "@/public/icons/Right arrow.svg"; // Assuming location of Right arrow.svg
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './Section4';


export const Section4 = () => {
  //const swiperRef = useRef(null);
  const swiperNavigate = useSwiper();

  const handlePrev = () => {
    swiperNavigate?.slidePrev;
  };

  const handleNext = () => {
    swiperNavigate?.slideNext;
  };


  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-2">Testimonials</h2>
          <p className="text-xl">What s our Members says?</p>
        </div>
        <div className="">
          <Swiper
            //ref={swiperRef}
            //className=""
            id="blogSlider1"
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.slider-prev',
              nextEl: '.slider-next'
            }}
            //autoplay={{ delay: 13500 }}
            loop={true}
          >
            {
              testimonialData.map((e, index) => (
              <SwiperSlide key={index} className="flex flex-col">
                <div className="border-2 mx-3 rounded-xl p-5 flex flex-col"  style={{height: '12rem'}}>
                  <p className="text-sm font-thin text-right flex-grow">{e.text}</p>
                  <div className="flex items-center mt-5">
                    <img className="mr-2" src="/user.png" alt="" />
                    <div className="">
                      <h5 className="text-md font-mono ">Name</h5>
                      <h6 className="text-sm font-mono font-thin text-[#FCE304] opacity-70">Position</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
}


const testimonialData = [
  {
    text: "طورت قدراتي والمهارات الخاصة مع TFC بشكل موجز، وأثناء بيئتي نخطط لمستقبلي.",
    name: "شخص",
    stars: 5,
    avatar: "/avatar1.png",
  },
  {
    text: "حققت إلى ما حققته في علم وحدي خاصة من ناحية البرمجة. قبل أن ادخل TFC كان شغفي مع HTML & CSS، الآن أرى حياتي مكانهم في سماعة رأي.",
    name: "حسان",
    stars: 5,
    avatar: "/avatar2.png",
  },
  {
    text: "بدأت في عالم الويب وتعلمت الكمبيوتر بمساعدة أجونس. تعاونت مع صديقتي في مشروعها بفضل أجونس واستفدت من تجربة رواد الأعمال، مما غير منظوري تجاه العمل وبلادي.",
    name: "مروى",
    stars: 4,
    avatar: "/avatar3.png",
  },
];