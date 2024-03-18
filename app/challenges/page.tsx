export default function Challenges() {
  
  return (
    <>
    <div>
      <h1 className="text-2xl font-bold text-center text-white">Algeria 2024</h1>
      <p className="text-lg text-center text-white">هو تحدي لمدة أسبوع لي من خلالو تثبث لروحك ولأعضاء النادي مدى إصرارك على تطوير نفسك ونمط حياتك، وهذا ما يسمحلك تدخل المجموعة الخاصة وتكمل تحدي 5 أشهر لي منو راح تنال كل الفرص لي تستاهلها باش توصل وين راك حاب</p>
    </div>
    <div className="">
      <h5 className="text-2xl font-bold text-right text-white">القواعد</h5>
      <div dir="rtl" className="mt-7 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-7">
        {
          rules.map((e, index) => (
            <div 
              className="mx-auto relative flex flex-col justify-center items-center px-3 py-3 rounded-[10px] bg-[#080808] border-[2.5px] border-white"
              key={index}
            >
              <span className="absolute top-[-18px] right-[10px] text-2xl font-bold text-center text-white bg-[#080808] px-1 py-0 rounded-lg">{ e.number }</span>
              <p className="text-xs text-right text-white">{ e.content }</p>
            </div>
          ))
        }
        <div></div>
        <div className="h-full flex justify-center items-center"> 
          <div className="w-full text-center py-3 rounded-[20px] border-2 border-[#fec401]">
            <a 
              href="#" 
              className="text-xl font-bold text-center text-[#f2f2f2]"
            > التسجيل هنا</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

const rules = [
  {
    number: '01',
    content: 'نوض قبل 5: الهدف انك تنوض بوعيك وتتفكر بلي عندك تحدي وطريق وخدمة تستنا فيك، لازم تنوض من الفراش مباشرة بعدما تتفكر، منبعد تقدر تعاود ترقد',
  },
  {
    number: '02',
    content: 'صور التحسن: كل يوم تصور روحك ووين وصلت، باش تعرف شحال تبدلت (تصاور متشاركهمش معانا)',
  },
  {
    number: '03',
    content: 'نظم وقتك: تعلم تنظيم يومك لتحقيق أقصى إنتاجية، وأفضل طريقة لذلك هي Time-boxing',
  },
  {
    number: '04',
    content: 'دير يومية: كل يوم اكتب وش درت فنهار، كون 1% خيرمن لبارح',
  },
  {
    number: '05',
    content: 'لا عجين لا غاز: ممنوع لأسبوع كامل اي عجائن ولا اكل سريع ولا مشروبات، فقط طياب الدار الصحي و الماء بكثرة',
  },
  {
    number: '06',
    content: 'اقرا : كل يوم عندك على الاقل 5 صفحات من كتاب يعملك , مشي قصة',
  },
  {
    number: '07',
    content: 'حرية عقلية: مكانش تلفون ساعة لولة والأخيرة من كل يوم بش تحافظ على انتاجيتك',
  },
  {
    number: '08',
    content: 'لإمتنان: اكتب رسالة شكر كل يوم لربي ولا للناس -خليها عندك- تشكر فيها نعمة جديدة مهما كانت',
  },
  {
    number: '09',
    content: 'ضع خطة: لازم تدير اهداف و خطة للشهر القادم وش راح تدير فيه خدمة وتعرف وين راك رايح',
  },
  {
    number: '10',
    content: 'تحكم فروحك: اختار نهار من الأسبوع متخدمش بتلفون 24 ساعة مهما كان السبب',
  },
  {
    number: '11',
    content: 'تحرك: دير رياضة 3 خطرات على الاقل فالاسبوع، وين تقدر الحصة تكون ربع ساعة -للبنات- ولا اخرج امشي',
  },
  {
    number: '12',
    content: 'ركز: في هذا الاسبوع اختار حاجة تركز تتعلمها ساعة على الاقل كل يوم',
  },
  {
    number: '13',
    content: 'القبطان يدعم خوه: لازم تقنع واحد تعرفو يدخل التحدي',
  }
]