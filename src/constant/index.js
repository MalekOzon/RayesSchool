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
    caption: "أولادك امانة لدينا"
  },
  {
    id: "2",
    title: "picture2",
    url: pic4,
    caption: "علم اولادك معنا"
  },
  {
    id: "3",
    title: "picture3",
    url: pic7,
    caption: "أولادك امانة لدينا"
  },
  {
    id: "3",
    title: "picture3",
    url: pic8,
    caption: "علم اولادك معنا"
  },
  {
    id: "3",
    title: "picture3",
    url: pic9,
    caption: "أولادك امانة لدينا"
  },
  {
    id: "3",
    title: "picture3",
    url: pic10,
    caption: "علم اولادك معنا"
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
    name: "خضر المغربل",
    pos: "أستاذ رياضة",
    text: "الرياضة ليست مجرد نشاط بدني، بل هي وسيلة لتعزيز الصحة النفسية والجسدية، وبناء روح الفريق والانضباط الذاتي. من خلالها نتعلم الصبر، الاجتهاد، وأهمية تحقيق التوازن في حياتنا اليومية.",
    img : "https://academy.hsoub.com/uploads/monthly_2015_10/13.jpg.4cbe499c45618f176d5aea2b8d599da2.jpg",
  },
  {
    id: "2",
    name: "مالك اوزون",
    pos: "أستاذ علوم",
    text: "علم الأحياء هو دراسة الحياة بكافة أشكالها، من خلايا دقيقة إلى أنظمة بيئية معقدة، يكشف عن أسرار الكائنات الحية وتفاعلاتها. من خلاله نفهم كيف نحافظ على توازن الطبيعة ونطور حلولًا للتحديات الصحية والبيئية التي تواجه العالم.",
    dw: "فقط مجرد نص مقط مجرد نص ما باللغة ا باللغة العربية",
    img : "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
  },
  {
    id: "3",
    name:"خديجة الشرع",
    pos: "أستاذ رياضيات",
    text:"الرياضيات لغة الكون التي تنظم الأفكار وتفسر الظواهر، فهي أساس التفكير المنطقي والتحليلي. من خلالها نتعلم حل المشكلات بطرق دقيقة ومبتكرة، مما يعزز قدراتنا العقلية ويُسهم في تقدم البشرية.",
    img : "https://t3.ftcdn.net/jpg/03/87/86/06/360_F_387860637_fnyXFt6vLlaqARcrZpNsUVfcgGAYh0jC.jpg",
  },
  {
    id: "4",
    name: "مهند الاصفر",
    pos: "أستاذ معلوماتية",
    text: "المعلوماتية هي العلم الذي يربط بين التكنولوجيا والبيانات لحل المشكلات المعقدة في مختلف المجالات. من خلالها ننظم ونحلل المعلومات بكفاءة، مما يفتح آفاقاً جديدة للإبداع والابتكار في عالم يعتمد بشكل متزايد على البيانات الرقمية.",
    img : "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg",
  },
  {
    id: "5",
    name: "خضر اوزون",
    pos: "أستاذ لغة عربية",
    text: "اللغة العربية لغة عريقة وثريّة، تمثل هوية الأمة وتراثها الثقافي، وهي لغة القرآن الكريم التي حملت رسالة الإسلام للعالم. بجمالها ودقتها، تُعَبّر عن أعماق المشاعر والأفكار، وتظل رمزًا للإبداع الفكري والأدبي عبر العصور.",
    img : "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
  },
  {
    id: "6",
    name: "خضر اوزون",
    pos: "أستاذ لغة عربية",
    text: "اللغة العربية لغة عريقة وثريّة، تمثل هوية الأمة وتراثها الثقافي، وهي لغة القرآن الكريم التي حملت رسالة الإسلام للعالم. بجمالها ودقتها، تُعَبّر عن أعماق المشاعر والأفكار، وتظل رمزًا للإبداع الفكري والأدبي عبر العصور.",
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
    img: "https://www.swinburneonline.edu.au/app/uploads/2022/09/female-teacher-with-children-1.webp",
    title:"درس الرياضة  ",
    time: "  9am - 10am  ",
    text: "الرياضة ليست مجرد نشاط بدني، بل هي وسيلة لتعزيز الصحة النفسية والجسدية، وبناء روح الفريق والانضباط الذاتي. من خلالها نتعلم الصبر، الاجتهاد، وأهمية تحقيق التوازن في حياتنا اليومية.",
  },
  {
    id: "2",
    img: "https://c8.alamy.com/comp/RBNN6H/young-female-primary-school-teacher-working-one-on-one-with-a-schoolgirl-at-a-table-in-a-classroom-both-looking-at-each-other-smiling-close-up-RBNN6H.jpg",
    title: "درس اللغة العربية",
    time: "10am - 11am",
    text: "اللغة العربية لغة عريقة وثريّة، تمثل هوية الأمة وتراثها الثقافي، وهي لغة القرآن الكريم التي حملت رسالة الإسلام للعالم. بجمالها ودقتها، تُعَبّر عن أعماق المشاعر والأفكار، وتظل رمزًا للإبداع الفكري والأدبي عبر العصور.",
  },
  {
    id: "3",
    img: "https://www.alleducationschools.com/wp-content/uploads/2018/03/elementary-school-teacher-degrees.jpg",
    title: "درس المعلوماتية",
    time: "11am - 12pm",
    text: "المعلوماتية هي العلم الذي يربط بين التكنولوجيا والبيانات لحل المشكلات المعقدة في مختلف المجالات. من خلالها ننظم ونحلل المعلومات بكفاءة، مما يفتح آفاقاً جديدة للإبداع والابتكار في عالم يعتمد بشكل متزايد على البيانات الرقمية.",
  },
  {
    id: "4",
    img: lesson,
    title: "درس الرياضيات",
    time: "  12pm - 1pm",
    text:"الرياضيات لغة الكون التي تنظم الأفكار وتفسر الظواهر، فهي أساس التفكير المنطقي والتحليلي. من خلالها نتعلم حل المشكلات بطرق دقيقة ومبتكرة، مما يعزز قدراتنا العقلية ويُسهم في تقدم البشرية.",
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
    price: "66$",
    period: "5mos",
    img: imageSlider3,
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "3",
    title: "ممتاز",
    price: "77$",
    period: "5mos",
    img: lesson,
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "4",
    title: "مخصص",
    price: "100$",
    period: "5mos",
    img: imageSlider3,
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
]
export const activity =[
  {
    id: "1",
    datenum: "21",
    dateyear: "فبراير 2020",
    img: "https://c8.alamy.com/comp/RBNN6H/young-female-primary-school-teacher-working-one-on-one-with-a-schoolgirl-at-a-table-in-a-classroom-both-looking-at-each-other-smiling-close-up-RBNN6H.jpg",
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "2",
    datenum: "21",
    dateyear: "مارس 2021",
    img: "https://www.swinburneonline.edu.au/app/uploads/2022/09/female-teacher-with-children-1.webp",
    title: "تجربة علمية جديدة",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "3",
    datenum: "21",
    dateyear: "يناير 2020",
    img: lesson,
    title: "التطوير في المناهج والتحديث",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "4",
    datenum: "21",
    dateyear: "مارس 2022",
    img: lesson,
    title: "اكتسب العديد من المهارات لاولادك",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "5",
    datenum: "21",
    dateyear: "يناير 2022",
    img: lesson,
    title: "تجرية علمية جديدة",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "6",
    datenum: "21",
    dateyear: "يناير 2023",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "7",
    datenum: "21",
    dateyear: "فبراير 2023",
    img: lesson,
    title: "اكتسب مهارة لتطوير ذاكرة ولدك ",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
  },
  {
    id: "8",
    datenum: "21",
    dateyear: "فبراير 2023",
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
    text: "موقعنا قرب مشفى الفارابي ",
    img:readingWhite
  },
  {
    id: 2,
    text: "12345678 963+",
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
    url: pic1
  },
  {
    id: 5,
    url: pic9
  },
  {
    id: 6,
    url: pic4
  },
  {
    id: 7,
    url: pic6
  },
  {
    id: 8,
    url: pic7
  },
  {
    id: 9,
    url: pic10
  }
]

export const contactInformation =[
  {
    id: 1,
    title: "العنوان",
    text: "قرب مشفى الفارابي"
  },
  {
    id: 2,
    title: " رقم التواصل",
    text: "12345678 963+"
  },
  {
    id: 3,
    title: " عنوان البريد الالكتروني",
    text: "malekozon123@gmail.com"
  },
  {
    id: 4,
    title: "الموقع الالكتروني",
    text: "https://rayes-school.vercel.app/"
  }
]