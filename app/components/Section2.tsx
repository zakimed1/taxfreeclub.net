export const Section2 = () => {
  const content = [
    {
      title: 'رد بالك !! ',
      body: 'مواقع تواصل قنعوك بلي تقدر ولازم تعيش وحدك. وين فالصح العزلة خطيرة علينا',
    },
    {
      title: 'راكم هنا اليوم',
      body: 'بش متقعدش فنفس البلاصة... ',
    },
    {
      title: 'كامل ',
      body: 'كامل، لازم تكون فجماعة وين واحد ينافسك ويدعمك وين ميخليكش تحبس الخدمة وديما يعاونك',
    }
  ]
  return (
    <>
      <h3 className="text-[32px] font-bold text-center text-white">HELLO, WELCOME TO TFC</h3>
      <div className="mx-auto grid text-center items-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 gap-6">
        <div className="w-[180px]">
          <img src="/logo24.png" alt="" />
        </div>
        {
          content.map((e, index) => (
            <div 
              key={index}
              className="w-[180px]"
            >
              <h5 className="text-xl font-bold text-center text-white">{ e.title }</h5>
              <p className="text-xs text-center text-white">{ e.body }</p>
            </div>
          ))
        }
      </div>
    </>
  )
}