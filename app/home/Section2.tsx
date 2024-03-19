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
    <div className="mb-24 mt-10 w-full">
      <h3 className="text-[32px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-white">
        HELLO, WELCOME TO TFC
      </h3>
      <div className="flex items-center justify-center">
        <div className="mx-auto flex flex-col sm:flex-row text-center items-center gap-16 sm:gap-4 md:gap-8">
          <div className="w-[180px] sm:w-[120px] md:w-[150px] lg:w-[180px]">
            <img src="./logo24.png" alt="" />
          </div>
          {content.map((e, index) => (
            <div key={index} className="w-[180px] sm:w-[80px] md:w-[150px] lg:w-[180px]">
              <h5 className="text-xl sm:text-lg md:text-xl font-mono text-center text-white">
                {e.title}
              </h5>
              <p className="text-xs sm:text-sm text-center text-white font-mono">
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};
