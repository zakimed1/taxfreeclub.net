import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import Lamin from "../events/lamin.jpg";
import Mouhamed from "../events/mohamed.jpg";
import Walid from "../events/walid.jpg";
localStorage.clear();
const EventContdown = () => {
  const endDate = new Date('March 09, 2024 10:00:00').getTime();
 
  const [remainingTime, setRemainingTime] = useState(
    parseInt(localStorage.getItem("countdownTimestamp")) || endDate
      //Date.now() + 79205000
  );

  useEffect(() => {
    localStorage.setItem('countdownTimestamp', remainingTime.toString());
  }, [remainingTime]);
  useEffect(() => {
    const now = Date.now();
    if (endDate < now) {
      setRemainingTime(endDate); // Ensure countdown ends at the endDate
    } else if (remainingTime > endDate) {
      setRemainingTime(endDate);
    }
  }, [endDate, remainingTime]);


  return (
    <>
      <Countdown
        date={remainingTime}
        className="h-36 w-auto font-mono text-center  m-7 max-sm:text-5xl md:text-7xl lg:text-9xl sm:m-0 md:m-3 lg:m-5b max-sm:h-16"
      />
      <h2 className="h-32 w-auto font-mono text-center  m-6 max-sm:text-xl,m-0 md:text-1xl lg:text-4xl max-sm:h-16">
        متضيعش هذي الفرصة
      </h2>
    </>
  );
};

const EventMain = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col   h-auto ">
        <h1 className="text-8xl h-60 max-sm:text-3xl md:text-5xl lg:text-8xl  max-sm:h-20 md:h-36">
          <span className="text-red-700">المشكل </span>
          يرجع
          <span className="text-green-700"> فرصة</span>
        </h1>
        <p className="text-center text-xl w-11/12 overflow-hidden h-1/2 mt-2  ">
          راح نعاونك تقضي على سبب فشلك في بداية مشروعك <br />
          كيما تمنيت يعاونوني كي بديت أنا قبل 5 سنوات. <br /> :أسباب فشلك هوما
          <br /> <span className="text-yellow-500"> الخبرة و راس المال</span>
          <br />
          :ولكن يجمعهم مشكل واحد
          <br />
          <span className="font-bold">.التواصل بمثال أوضح</span> <br /> كي تجي
          لحدث 9 مارس. راح تلقا المحيط لي يعاونك باش تخدم. وتلقا اصحاب مشاريع و
          خبراء يعاونوك تحل مشاكلك وهذا راح يوفر عليك المصاريف. واذا قدرت تتواصل
          معاهم صح. وكانت عندك قيمة إضافية. راح تخلق فرص لروحك باش تخدم مشروعك.
          استمارة التسجيل راح تكون بالثلاثاء.وماتخلي حتى واحد يحبسك في رمضان هذا
        </p>

        <p className="text-xl h-16  ">9 mars 2024</p>
        <p className="h-12 text-xl ">جامعة باب الزوار usthb الجزائر العاصمة</p>
        <p className="overflow-hidden h-60 ">
          Fiche technique : <br /> 8-10 check in: arrivée des visiteurs
          <br />
          10-12conférence des responsables de l'association <br />
          12-13 pause petitdéjeuner <br />
          13-14 conférence de TFC <br />
          13-13:30 Explication du concept deTFC <br />
          13:30-14 explication du programme RAMADHAN <br />
          14-15 pause networking
          <br />
          15:30 - 16:00 cérémonie de clôture
          <br />
        </p>
        <a href="https://forms.gle/mJVeHDbiGZvKd3CX8" target="_blank">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 m-4">
            Rejoignez nous
          </button>
        </a>

        <p className="text-4xl h-24 mt-8 ">Nos invités</p>
        <div className="flex h-auto flex-wrap justify-center items-center gap-2">
          <Card className="w-36 bg-black border-white rounded-full">
            <CardHeader floated={false} className="h-36">
              <img
                className="h-full w-screen"
                src={Lamin}
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h6" color="white" className="mb-2">
                LAMIN AMARI
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CONTENT CEATOR
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-36 bg-black border-white rounded-full">
            <CardHeader floated={false} className="h-36">
              <img
                className="h-full w-screen"
                src={Mouhamed}
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                variant="h6"
                color="white"
                className="mb-2 capitalize"
              >
                mohamed belili
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CONTENT CEATOR
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-36 bg-black border-white rounded-full">
            <CardHeader floated={false} className="h-36">
              <img
                className="h-full w-screen"
                src={Walid}
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                variant="h6"
                color="white"
                className="mb-2 capitalize"
              >
                walid ezra
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CONTENT CEATOR
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default function Event() {
  const [showOldComponent, setShowOldComponent] = useState(true);
  const [block, setclassName] = useState(
    "block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 w-48"
  );

  const handleButtonClick = () => {
    setShowOldComponent(false);
    setclassName(
      "hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 w-48"
    );
  };

  return (
    <>
      <div className="  flex justify-center align-middle flex-col dark">
        {showOldComponent ? <EventContdown /> : <EventMain />}
        <div className=" flex justify-center align-middle">
          <button className={block} onClick={handleButtonClick}>
            اضغط لعرض المزيد
          </button>
        </div>
      </div>
    </>
  );
}
