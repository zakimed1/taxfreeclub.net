"use client";
import React, { useState } from "react";
import Left from "@/public/icons/Left arrow.svg"; // Assuming location of Left arrow.svg
import Right from "@/public/icons/Right arrow.svg"; // Assuming location of Right arrow.svg
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./Section4";
import { Import } from "lucide-react";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { text } from "stream/consumers";

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
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".slider-prev",
              nextEl: ".slider-next",
            }}
            autoplay={{ delay: 3500 }}
            loop={true}
          >
            {testimonialData.map((e, index) => (
              <SwiperSlide key={index} className="flex flex-col">
                <div className="border-2 mx-3 rounded-xl p-5 flex flex-col h-[14rem] sm:h-[16rem]">
                  <p className="text-sm font-thin text-right flex-grow">
                    {e.text}
                  </p>
                  <div className="flex items-center mt-5">
                    <img className="mr-2" src={e.avatar} alt="idk" />
                    <div className="">
                      <h5 className="text-md font-mono ">{e.name}</h5>
                      <h6 className="text-sm font-mono font-thin text-[#FCE304] opacity-70">
                        {e.position}
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-5 flex justify-center gap-4">
            <Button className="slider-arrow slider-prev" onClick={handlePrev}>
              <img src="/icons/arrow_left.png" alt="" />
            </Button>
            <Button className="slider-arrow slider-next" onClick={handleNext}>
              <img src="/icons/arrow_right.png" alt="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonialData = [
  {
    text: "طورت قدراتي والمهارات الخاصة مع TFC بشكل موجز، وأثناء بيئتي نخطط لمستقبلي.",
    name: "Chiraz",
    position: "GRH",
    avatar: "/user.png",
  },
  {
    text: "حققت إلى ما حققته في علم وحدي خاصة من ناحية البرمجة. قبل أن ادخل TFC كان شغفي مع HTML & CSS، الآن أرى حياتي مكانهم في سماعة رأي.",
    name: "حسان",
    position: "Video editing",
    avatar: "/user.png",
  },
  {
    text: "بدأت في عالم الويب وتعلمت الكمبيوتر بمساعدة أجونس. تعاونت مع صديقتي في مشروعها بفضل أجونس واستفدت من تجربة رواد الأعمال، مما غير منظوري تجاه العمل وبلادي.",
    name: "مروى",
    position: "web dev",
    avatar: "/user.png",
  },
  {
    text: "بدأت في عالم الويب وتعلمت الكمبيوتر بمساعدة أجونس. تعاونت مع صديقتي في مشروعها بفضل أجونس واستفدت من تجربة رواد الأعمال، مما غير منظوري تجاه العمل وبلادي.",
    name: "mohamed siradj ",
    position: "web dev",
    avatar: "/user.png",
  },
  {
    text: "طورت نفسي فالمجال grh خاصة مع تكوين لي وفراتوا tfc بديت نخطط لمشروعي",
    name: "شفاء",
    position: "GRH",
    avatar: "/user.png",
  },
  {
    text: "الاجتماع مع اناس مروا بتجارب مختلفة ووصل كل منهم الا نتائج بمواجهة المشاكل و إيجاد حلول، يعطيك فكرة عن الإنسان لم يخلق لينجح  وحيدا رغم الجميع و لكن ان ينجح في وسط مجتمع ناجح مع الجميع",
    name: "صديق",
    position: "Video editing",
    avatar: "/user.png",
  },
  {
    text: "I improved my skill in editing i did huge progress. I become consistent on my daily activities during the day reading, working, sports مع اناس مروا بتجارب مختلفة ووصل كل منهم الا نتائج بمواجهة المشاكل و إيجاد حلول، يعطيك فكرة عن الإنسان لم يخلق لينجح  وحيدا رغم الجميع و لكن ان ينجح في وسط مجتمع ناجح مع الجميع",
    name: "Farida",
    position: "Video editing",
    avatar: "/user.png",
  },
];
