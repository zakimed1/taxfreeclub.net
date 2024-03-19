import Image from "next/image";
import Logo24 from "./logo24.png";
export const Section2 = () => {
  const content = [
    {
      title: "رد بالك !! ",
      body: "مواقع تواصل قنعوك بلي تقدر ولازم تعيش وحدك. وين فالصح العزلة خطيرة علينا",
    },
    {
      title: "راكم هنا اليوم",
      body: "بش متقعدش فنفس البلاصة... ",
    },
    {
      title: "كامل ",
      body: "كامل، لازم تكون فجماعة وين واحد ينافسك ويدعمك وين ميخليكش تحبس الخدمة وديما يعاونك",
    },
  ];
  return (
    <div className="mb-24  mt-10">
      <h3 className="text-[32px] font-bold text-center text-white ">
        HELLO, WELCOME TO TFC
      </h3>
      <div className="flex items-center justify-center">
        <div className="mx-auto flex   text-center items-center  max-sm:flex-col max-sm:gap-16 gap-40 ">
          <div className="w-[180px]">
            <Image src={Logo24} alt="" />
          </div>
          {content.map((e, index) => (
            <div key={index} className="w-[180px]">
              <h5 className="text-xl font-bold text-center text-white">
                {e.title}
              </h5>
              <p className="text-xs text-center text-white">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
