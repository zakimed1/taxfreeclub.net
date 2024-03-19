import Image from "next/image";
import Link from "next/link";
import Logo24 from "./logo24.png";
import Header from "@/components/Header";

export default function Component() {
  return (
    // replace header with nav bar compo
    <div className="bg-black text-white w-full  h-full max-md:h-full max-sm:h-full">
      <Header />
      <main className="w-full h-screen mt-10 max-md:h-full max-sm:h-full  px-8 max-sm:py-4 max-sm:px-2  ">
        <section className="space-y-8 flex w-11/12 text  max-sm:text-xs max-sm:flex-col">
          <div className="flex items-center justify-between">
            <Image src={Logo24} alt="logo" />
          </div>
          <article className="space-y-4 text-right w-full">
            <h2 className="text-xl font-semibold">:TFC تعريف</h2>
            <p>
              مجموعة متحدة بالإنضباط، مدفوعة بالطموح. نحن مجتمع من الأفراد ذوي
              العزيمة القوية، حيث يمتلك كل فرد مهارة فريدة تسهم في نجاحنا
              الجماعي. مهمتنا واحدة: تحقيق الحرية المالية من خلال الأعمال
              الداخلية والوصول لنمط حياة غني ومتطور
            </p>
            <h2 className="text-xl font-semibold">:مهمتنا</h2>
            <p>
              العزلة عدو كل قبطان يريد تطوير حياته، فإن هذا النادي لأن يوفر له
              الجو الجماعي الملائم ليتعاون مع من هم بنفس عقليته على التركيز في
              طريق العمل وتحقيق أهدافهم معًا مع طريق تبادل الخبرات والمنافع
            </p>
            <h2 className="text-xl font-semibold">:القواعد والقيم</h2>
            <p>
              يجب على كل الأعضاء إحترام القوانين العامة للمجموعة أهمها القبطان
              يدعم خوه:على كل فرد دعم زميله في حالة إحتياجه له حسب إستطاعته
              المسؤولية العامة:على كل عضو تحمل مسؤولية نجاح المجموعة بالمساهمة،
              مهما كانت أقدميته أنفع قبل ما تنتفع:على كل فرد أن ينضم بنية تبادل
              النفع وليس بالإستغلال فقط. إضافة قيمة للمجموعة إجباري
            </p>
            <h2 className="text-xl font-semibold">:تقييم الأداء </h2>
            <p>
              يتم تقييم أداء الأعضاء بحسب إلتزامهم بقواعد وقيم المجموعة، ويكون
              هذا بشكل أسبوعي. في حال عدم تحسن أداء فرد بعد تدهوره. يتم إقصاؤه
              ويتوجب عليه إعادة التحدي من جديد
            </p>
            <h2 className="text-xl font-semibold">:الفرص المقدمة</h2>
            <p>
              يتم تقديم فرص للأعضاء الذين يثبتون أنفسهم في التعلم والعمل ومساعدة
              باقي الفريق بما يستطيعون تقديمه. وهذا حتى يواصلوا طريقهم فيما
              يقومون به. تتمثل هذه الفرص في أي شيء يسهم في دعم هذا القبطان
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
