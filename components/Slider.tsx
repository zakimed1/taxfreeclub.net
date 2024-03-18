"use client";
import React, { useState } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Left from "@/public/icons/Left arrow.svg"; // Assuming location of Left arrow.svg
import Right from "@/public/icons/Right arrow.svg"; // Assuming location of Right arrow.svg

export default function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialData.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const testimonialData = [
    {
      text: `\n            طورت قدراتي والمهارات الخاصة مع TFC بشكل لي وجيزا\u{64b} وأثناء بيئتي نخطط لمستقبلي.\n           `,
      name: "شخص",
      stars: 5, // Assuming a star rating system (optional)
      avatar: "/avatar1.png", // Path to avatar image (optional)
    },
    {
      text: `حققت الى ماحققتهون في علم وحدي خاصة من ناحية البرمجة. قبل ما ادخل طلب شغفي مع HTML & CSS كري حياتي مكانهم في سماعة رأي.`,
      name: "حسان",
      stars: 5,
      avatar: "/avatar2.png",
    },
    {
      text: `بدعت الويب وتعلمت الكومبيوتر ماكنتش وتعلمت الكمبيوتر من اجونس. دو وتعاونت صديقتي مع شغلها من اجونس دو وتعاونت رواد راني خلعتها مع روج و بلادي لا تكون كابتة تالية.`,
      name: "مروى",
      stars: 4,
    },
    // ... add more testimonial objects
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-2">Testimonials</h2>
          <p className="text-xl">What s our Members says?</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            aria-label="Previous testimonial"
            className="p-2"
            onClick={handlePreviousSlide}
          >
            <Left className="text-white" /> {/* Assuming Left icon */}
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialData.map((testimonial, index) => (
              <div
                key={index} // Important for performance
                className={`bg-[#1C1C1E] p-6 rounded-lg space-y-4 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <p className="text-sm">{testimonial.text}</p>
                {/* ... rest of the testimonial content */}
              </div>
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            className="p-2"
            onClick={handleNextSlide}
          >
            <Right className="text-white" /> {/* Assuming Right icon */}
          </button>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
