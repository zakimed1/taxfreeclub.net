"use client";
import Header from "@/components/Header";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function Challenges() {
  const [Challenge, setchalenge] = useState(false);
  function clickhandler() {
    setchalenge(true);
  }
  return (
    <div className="h-full w-full max-sm:h-full">
      <div className="flex flex-col justify-center items-center p-7">
        <div className="">
          <h1 className="text-3xl m-4 font-bold text-center text-white">
            Algeria 2024
          </h1>
          <p className="text-lg text-center text-white">
            هو تحدي لمدة أسبوع لي من خلالو تثبث لروحك ولأعضاء النادي مدى إصرارك
            على تطوير نفسك ونمط حياتك، وهذا ما يسمحلك تدخل المجموعة الخاصة وتكمل
            تحدي 5 أشهر لي منو راح تنال كل الفرص لي تستاهلها باش توصل وين راك
            حاب
          </p>
        </div>
        <div className="">
          <h5 className="text-2xl font-bold text-right text-white mt-5">
            القواعد
          </h5>
          <div
            dir="rtl"
            className="mt-7 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-7"
          >
            {rules.map((e, index) => (
              <div
                className="mx-auto relative flex flex-col justify-center items-center px-3 py-3 rounded-[10px] bg-[#080808] border-[2.5px] border-white w-full"
                key={index}
              >
                <span className="absolute top-[-18px] right-[10px] text-2xl font-bold text-center text-white bg-[#080808] px-1 py-0 rounded-lg">
                  {e.number}
                </span>
                <p className="text-xs text-right text-white">{e.content}</p>
              </div>
            ))}

            <div className="h-full flex justify-center items-center">
              <div onClick={clickhandler} className="w-full items-center text-center py-3 rounded-[20px] border-2 border-[#fec401]">
                <Button
                  className="text-xl font-bold text-center text-[#f2f2f2]"
                >
                  {" "}
                  التسجيل هنا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Challenge && <JoinChallenge />}
    </div>
  );
}


function JoinChallenge() {
  return (
    <div className="text-right p-7">
      <p className="pt-8 ">Discord التحدي يقام في تطبيق</p>
      <p className="pt-3 ">عليك تحميله. تجد فديو إرشادي أسفل الصفحة..</p>
      <p className="pt-3 ">
        JOIN-TFC تدخل إليها، ثم بعد قراءتك للوصف تضغط على إستمارة بدأ
      </p>
      <p className="pt-3 ">
        التحدي حتى يتم تسجيلك في المشاركين ثم إضغط على -إبدأ التحدي- والذي يأخذك
        إلى غرفتك الخاصة لإجراء التحدي. أي ستقوم بكتابة اسمك الكامل وعناونك
        البريدي email
      </p>
      <p className="pt-3 ">
        ويبدأ عد الأيام - يمكنك بدأ التحدي متى شئت - بتطبيقك لقواعد التحدي يترتب
        عليك مشاركة تقدمك في إنجازها كمشاركة اليومية مع إنتهاء كل نهار. وكذا
        إرسالك رسالة يومية قبل 5 صباحا لإثبات حضورك. بعد إنهائك التحدي تقوم بملء
        إستمارة تجدها في غرفة join-tfc# حتى تعلم المسؤول عن إنتهائك ويتم مراجعة
        نتائجك. طريقة تقييم النتائج تختلف من مشارك لآخر. المهم أن على كل شخص
        تقديم كل ما لديه. وفي حالة فشلك يطلب منك إعادة التحدي إذا كنت حقا لاتزال
        راغبا في تغيير حياتك. لا توجد أي تساهلات في تقييم التحدي وداخل المجموعة.
        بعد أن يتم قبولك في المجموعة سيعرض عليك شرح مفصل عن المجموعة الخاصة وكذا
        القواعد العامة لها حتى تستطيع فهم كيفية سير الأمور.
      </p>
      <div className=" flex justify-center items-center">
        <p className="pt-8 font-bold text-xl font-sans  ">
          One DAY or Day One !
        </p>
      </div>

      <div className=" flex justify-center items-center">
        <button className=" mt-2 p-2 rounded-md flex pv-1 items-center justify-center  border-solid border-1 border-[#473c89]  bg-[#473c89] focus:bg-[#584bac] font-bold font-mono hover:bg-transparent ">
          <a href="https://discord.gg/gWmNstdYnj" target="_blank">
            {" "}
            Discord
          </a>
        </button>
      </div>

      <p></p>
    </div>
  );
}

const rules = [
  {
    number: "01",
    content:
      "نوض قبل 5: الهدف انك تنوض بوعيك وتتفكر بلي عندك تحدي وطريق وخدمة تستنا فيك، لازم تنوض من الفراش مباشرة بعدما تتفكر، منبعد تقدر تعاود ترقد",
  },
  {
    number: "02",
    content:
      "صور التحسن: كل يوم تصور روحك ووين وصلت، باش تعرف شحال تبدلت (تصاور متشاركهمش معانا)",
  },
  {
    number: "03",
    content:
      "نظم وقتك: تعلم تنظيم يومك لتحقيق أقصى إنتاجية، وأفضل طريقة لذلك هي Time-boxing",
  },
  {
    number: "04",
    content: "دير يومية: كل يوم اكتب وش درت فنهار، كون 1% خيرمن لبارح",
  },
  {
    number: "05",
    content:
      "لا عجين لا غاز: ممنوع لأسبوع كامل اي عجائن ولا اكل سريع ولا مشروبات، فقط طياب الدار الصحي و الماء بكثرة",
  },
  {
    number: "06",
    content: "اقرا : كل يوم عندك على الاقل 5 صفحات من كتاب يعملك , مشي قصة",
  },
  {
    number: "07",
    content:
      "حرية عقلية: مكانش تلفون ساعة لولة والأخيرة من كل يوم بش تحافظ على انتاجيتك",
  },
  {
    number: "08",
    content:
      "لإمتنان: اكتب رسالة شكر كل يوم لربي ولا للناس -خليها عندك- تشكر فيها نعمة جديدة مهما كانت",
  },
  {
    number: "09",
    content:
      "ضع خطة: لازم تدير اهداف و خطة للشهر القادم وش راح تدير فيه خدمة وتعرف وين راك رايح",
  },
  {
    number: "10",
    content:
      "تحكم فروحك: اختار نهار من الأسبوع متخدمش بتلفون 24 ساعة مهما كان السبب",
  },
  {
    number: "11",
    content:
      "تحرك: دير رياضة 3 خطرات على الاقل فالاسبوع، وين تقدر الحصة تكون ربع ساعة -للبنات- ولا اخرج امشي",
  },
  {
    number: "12",
    content:
      "ركز: في هذا الاسبوع اختار حاجة تركز تتعلمها ساعة على الاقل كل يوم",
  },
  {
    number: "13",
    content: "القبطان يدعم خوه: لازم تقنع واحد تعرفو يدخل التحدي",
  },
];
