"use client";
import Image from "next/image";
import Play from "./play_btn.png";
import { useState } from "react";
import "./Carousel.css";
import img1 from "@/public/icons/img1.png";
export const Section3 = () => {
  const initialItems = [
    {
      id: 1,
      number: "01",
      title: "Some Pictures of",
      name: "Members Work",
      description:
        "Variant object vector clip library. Device layout scale asset share union blur duplicate editor slice.!",
      imageUrl: "/icons/img1.png",
    },
    {
      id: 2,
      number: "02",
      title: "Web Developer",
      name: "Jervi",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "/icons/img2.png",
    },
    {
      id: 3,
      number: "03",
      title: "",
      name: "Iceland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "/icons/img3.png",
    },
    {
      id: 4,
      number: "04",
      title: "",
      name: "Australia",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "/icons/img4.png",
    },
    {
      id: 5,
      number: "05",
      title: "",
      name: "Netherland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "/icons/img5.png",
    },
    {
      id: 6,
      number: "06",
      title: "",
      name: "Ireland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "/icons/img6.png",
    },
    {
      id: 7,
      number: "07",
      title: "",
      name: "Switzerland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "/icons/img7.png",
    },
    {
      id: 8,
      number: "08",
      title: "",
      name: "Switzerland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "/icons/img8.png",
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const navigateTo = (index) => {
    for (let i = 0; i < index - 1; i++) {
      setTimeout(() => {
        nextSlide();
      }, i * 123);
    }
  };

  const renderItems = () => {
    const length = initialItems.length - 1;
    return items
      .slice(currentIndex, currentIndex + length)
      .concat(
        items.slice(0, Math.max(0, length - (items.length - currentIndex)))
      )
      .map((item, index) => (
        <div
          key={item.id}
          className={`itemZ ${index === 0 ? "active" : ""}`}
          style={{ backgroundImage: `url(${item.imageUrl})` }}
          onClick={() => navigateTo(index)}
        >
          <div className="contentZ">
            <div className="nameZ font-semibold text-left uppercase text-white">
              {item.name}
            </div>
            <div className="text-left capitalize text-white">{item.title}</div>
            <div className="descriptionZ text-left capitalize text-white">
              {item.description}
            </div>
            <button>See More</button>
          </div>
        </div>
      ));
  };

  return (
    <div className="section3">
      <div className="containerZ">
        <div className="slideZ">{renderItems()}</div>

        <div className="bottomZ px-8">
          <div className="buttonZ">
            <button className="prevZ" onClick={previousSlide}>
              <img src="./icons/arrow_left.png" />
            </button>
            <button className="nextZ" onClick={nextSlide}>
              <img src="./icons/arrow_right.png" />
            </button>
          </div>
          <div className="fake-line"></div>
          <div className="number">
            <span className="text-[30px] font-semibold text-left uppercase text-white">
              {initialItems[currentIndex].number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
