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
      <h3>HELLO, WELCOME TO TFC</h3>
      <div>
        <div>
          <img src="/logo24.png" alt="" />
        </div>
        {
          content.map((e, index) => (
            <div key={index}>
              <h5>{ e.title }</h5>
              <p>{ e.body }</p>
            </div>
          ))
        }
      </div>
    </>
  )
}