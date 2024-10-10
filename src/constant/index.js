import {
  bookAndLibrary,
  certification,
  certificationWhite,
  creative,
  education,
  imageSlider1 ,imageSlider2, 
  imageSlider3, 
  lesson, 
  logoFade, 
  pic1, 
  pic10, 
  pic2, 
  pic4, 
  pic6, 
  pic7, 
  pic8, 
  pic9, 
  playing, 
  reading, 
  readingWhite, 
  safety, 
  teacher
} from "../assets/PhotoIndex"


export const navigation = [
  {
    id: "0",
    title: "الرئيسية",
    url: ".",
  },
  {
    id: "1",
    title: "عن المدرسة",
    url: "about",
  },
  {
    id: "2",
    title: "المدرسون",
    url: "teacher",
  },
  {
    id: "3",
    title: "المقالات",
    url: "blog",
  },
  {
    id: "4",
    title: "تواصل معنا",
    url: "contact",
  }
];
export const imageSlides =[
  {
    id: "1",
    title: "picture1",
    url: pic1,
    caption: "علم اولادك معنا"
  },
  {
    id: "2",
    title: "picture2",
    url: pic4,
    caption: "اولادك امانة لدينا"
  },
  {
    id: "3",
    title: "picture3",
    url: pic7,
    caption: "نهتم  "
  },
  {
    id: "3",
    title: "picture3",
    url: pic8,
    caption: " بمستقبل "
  },
  {
    id: "3",
    title: "picture3",
    url: pic9,
    caption: "نهتم بمستقبل طفلك"
  },
  {
    id: "3",
    title: "picture3",
    url: pic10,
    caption: "نهتم بمستقبل طفلك"
  }
]
export const serviceInfo =[
  {
    id: "1",
    title: "المعلمون ",
    text: "المعلمون هم حجر الأساس في بناء العقول، يوجهون ويزرعون العلم والإلهام",
    icon: teacher,
    color: "bg-[#F1453D]"
  },
  {
    id: "2",
    title: "التعليم الخاص",
    text: "التعليم الخاص يهتم بتلبية احتياجات الطلاب الخاصة لتعزيز التعلم الفردي والتنمية الشاملة",
    icon: reading,
    color: "bg-[#1EAAF1]"
  },
  {
    id: "3",
    title: "المناهج التعليمية",
    text: "المناهج التعليمية تنظم المحتوى الأكاديمي، تصقل المهارات، وتعد الطلاب لمستقبلهم العملي والعلمي",
    icon: bookAndLibrary,
    color: "bg-[#8CC152]"
  },
  {
    id: "4",
    title: "شهادة",
    text: "الشهادات التعليمية تفتح آفاق المستقبل، تعزز الفرص المهنية، وتؤكد على تحقيق الطموحات",
    icon: certification,
    color: "bg-[#5D50C6]"
  }
]

export const offersInfo =[
  {
    id: "1",
    icon: safety,
    title: "أولوية الأمان",
    text: "نوفر بيئة تعليمية آمنة تضمن سلامة جميع الطلاب والمعلمين. نستخدم أحدث التقنيات والممارسات لضمان بقاء المدرسة مكانًا يحفّز التعلم دون قلق."
  },
  {
    id: "2",
    icon: readingWhite,
    title: "صفوف نظامية",
    text: " نلتزم بتنظيم الفصول الدراسية لضمان تجربة تعليمية فعالة ومثمرة. الصفوف النظامية تسهم في توفير بيئة تعليمية منضبطة تتيح للطلاب التركيز على التعلم."
  },
  {
    id: "3",
    icon: certificationWhite,
    title: "أساتذة متميزون",
    text: " يمتلك فريق التدريس لدينا خبرة كبيرة وشغفًا بالتعليم، مما يعزز جودة التعلم. معلمونا متفانون في تقديم الأفضل لطلابهم ويسعون دائمًا لتحسين أساليبهم التعليمية."
  },
  {
    id: "4",
    icon: education,
    title: "طلاب جيدون",
    text: " طلابنا يلتزمون بالمعايير الأكاديمية والأخلاقية العالية، مما يخلق بيئة تعليمية ملهمة. تميز الطلاب يعكس نجاح المدرسة في إعداد جيل واعٍ وقادر على تحقيق النجاح."
  },
  {
    id: "5",
    icon: creative,
    title: "مناهج أكاديمية",
    text: "نوفر مناهج حديثة وشاملة تساهم في تطوير مهارات الطلاب ومعرفتهم. مناهجنا مصممة لتواكب التطورات العلمية والتكنولوجية الحديثة."
  },
  {
    id: "6",
    icon: playing,
    title: "نشاطات متنوعة",
    text: " نقدم مجموعة واسعة من النشاطات اللامنهجية لتنمية مواهب الطلاب وتشجيعهم على استكشاف اهتمامات جديدة. النشاطات تشمل الرياضة والفنون والعلوم، مما يتيح للطلاب فرصة تطوير مهاراتهم في مجالات متعددة."
  },
]
export const teacherInfo=[
  {
    id: "1",
    name: "خضر اوزون",
    pos: "أستاذ رياضة",
    text: "فقط مجرد نص ما باللغة قط مجرد نص ما باللغة العربية",
    img : "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
  },
  {
    id: "2",
    name: "خضر اوزون",
    pos: "أستاذ رياضة",
    text: "فقط مجرد نص مقط مجرد نص ما باللغة ا باللغة العربية",
    img : "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
  },
  {
    id: "3",
    name: "خضر اوزون",
    pos: "أستاذ رياضة",
    text: "فقط مجرد نص مقط مجرد نص ما باللغة ا باللغة العربية",
    img : "https://t3.ftcdn.net/jpg/03/87/86/06/360_F_387860637_fnyXFt6vLlaqARcrZpNsUVfcgGAYh0jC.jpg",
  },
  {
    id: "4",
    name: "خضر اوزون",
    pos: "أستاذ رياضة",
    text: "فقط مجرد نص مقط مجرد نص ما باللغة ا باللغة العربية",
    img : "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg",
  },
  {
    id: "5",
    name: "خضر اوزون",
    pos: "أستاذ رياضة",
    text: "فقط مجرد نص قط مجرد نص ما باللغة ما باللغة العربية",
    img : "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
  },
  {
    id: "6",
    name: "خضر اوزون",
    pos: "أستاذ رياضة",
    text: "فقط مجردقط مجرد نص ما باللغة  نص ما باللغة العربية",
    img : "https://cdn.create.vista.com/api/media/small/230385174/stock-photo-portrait-beautiful-smiling-woman-looking-camera-isolated-white",
  },
  {
    id: "7",
    name: "خضر اوزون",
    pos: "أستاذ رياضة",
    text: "فقط مجرد نقط مجرد نص ما باللغة ص ما باللغة العربية",
    img : "https://img.freepik.com/free-photo/portrait-business-woman-with-enthusiastic-face-expression-smiling-looking-confident-standing-s_1258-88087.jpg",
  },
  {
    id: "8",
    name: "خضر اوزون",
    pos: "أستاذ رياضة",
    text: "فقط مجرد قط مجرد نص ما باللغة نص ما باللغة العربية",
    img : "https://static.vecteezy.com/system/resources/previews/035/832/833/large_2x/ai-generated-beautiful-young-business-woman-portrait-woman-face-smiling-cute-girl-with-long-hair-studio-shot-isolated-on-gray-background-photo.jpg",
  },
  {
    id: "9",
    name: "خضر اوزون",
    pos: "أستاذ رياضة",
    text: "فقط مجرد نص ما قط مجرد نص ما باللغة باللغة العربية",
    img : "https://t3.ftcdn.net/jpg/03/87/86/06/360_F_387860637_fnyXFt6vLlaqARcrZpNsUVfcgGAYh0jC.jpg",
  },
]
export const lessonInfo =[
  {
    id: "1",
    img: lesson,
    title: "درس اللغة",
    time: "  9:00am - 10am  ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "2",
    img: lesson,
    title: "درس الرياضة",
    time: "9:00am - 10am",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "3",
    img: lesson,
    title: "درس الموسيقى",
    time: "9:00am - 10am",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "4",
    img: lesson,
    title: "درس الرسم",
    time: "  9:00am - 10am",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
]
export const counterInfo=[
  {
    id:"1",
    title: "اساتذة مؤهلون",
    num: 12
  },
  {
    id:"2",
    title: "طفل ناجح",
    num: 250
  },
  {
    id:"3",
    title: "والدان سعيدان",
    num: 484
  },
  {
    id:"4",
    title: "جائزة ممنوحة",
    num: 9
  },
]
export const price =[
  {
    id: "1",
    title: "اساسي",
    price: "57$",
    period: "5mos",
    img: lesson,
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "2",
    title: "عادي",
    price: "57$",
    period: "5mos",
    img: lesson,
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "3",
    title: "ممتاز",
    price: "57$",
    period: "5mos",
    img: lesson,
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "4",
    title: "مخصص",
    price: "57$",
    period: "5mos",
    img: lesson,
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
]
export const activity =[
  {
    id: "1",
    datenum: "21",
    dateyear: "فبراير 2019",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "2",
    datenum: "21",
    dateyear: "فبراير 2019",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "3",
    datenum: "21",
    dateyear: "فبراير 2019",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "4",
    datenum: "21",
    dateyear: "فبراير 2019",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "5",
    datenum: "21",
    dateyear: "فبراير 2019",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "6",
    datenum: "21",
    dateyear: "فبراير 2019",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "7",
    datenum: "21",
    dateyear: "فبراير 2019",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "8",
    datenum: "21",
    dateyear: "فبراير 2019",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "9",
    datenum: "21",
    dateyear: "فبراير 2019",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
]
export const parents =[
  {
    id: 1,
    img: imageSlider1,
    name: "غزوان اوزون",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
    who: "الوالد"
  },
  {
    id: 2,
    img: imageSlider3,
    name: "رضوان اوزون",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
    who: "الوالد"
  },
  {
    id: 3,
    img: imageSlider2,
    name: "حمدان اوزون",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
    who: "الوالد"
  },
  {
    id: 4,
    img: imageSlider1,
    name: "مروان اوزون",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
    who: "الوالد"
  },
  {
    id: 5,
    img: lesson,
    name: "خلدان اوزون",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
    who: "الوالد"
  },
]
export const icons =[
  {
    id: 1,
    text: "موقعنا قرب نادي الملاعب تبع الطابي",
    img:readingWhite
  },
  {
    id: 2,
    text: "+963 987 654 321",
    img:readingWhite
  },
  {
    id: 3,
    text: "malekozon123@gmail.com",
    img:readingWhite
  }
]
export const footerLink =[
  {
    id: "0",
    title: "الرئيسية",
    url: ".",
  },
  {
    id: "1",
    title: "عن المدرسة",
    url: "about",
  },
  {
    id: "2",
    title: "المدرسون",
    url: "teacher",
  },
  {
    id: "3",
    title: "المقالات",
    url: "blog",
  },
  {
    id: "4",
    title: "تواصل معنا",
    url: "contact",
  }
]
export const social=[
  {
    id:1,
    icon: logoFade,
    url: "https://www.facebook.com/Rayesalrashidi/"
  }
]
export const photos =[
  {
    id: 1,
    url: lesson
  },
  {
    id: 2,
    url: imageSlider1
  },
  {
    id: 3,
    url: imageSlider2
  },
  {
    id: 4,
    url: lesson
  },
  {
    id: 5,
    url: lesson
  },
  {
    id: 6,
    url: lesson
  },
  {
    id: 7,
    url: lesson
  },
  {
    id: 8,
    url: lesson
  },
  {
    id: 9,
    url: lesson
  }
]