import {
  bookAndLibrary,
  certification,
  certificationWhite,
  creative,
  education,
  imageSlider1 ,imageSlider2, 
  imageSlider3, 
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
    url: imageSlider1,
    caption: "علم اولادك معنا"
  },
  {
    id: "2",
    title: "picture2",
    url: imageSlider2,
    caption: "اولادك امانة لدينا"
  },
  {
    id: "3",
    title: "picture3",
    url: imageSlider3,
    caption: "نهتم بمستقبل طفلك"
  }
]
export const serviceInfo =[
  {
    id: "1",
    title: "المعلمون المعتمدون",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
    icon: teacher,
    color: "bg-[#F1453D]"
  },
  {
    id: "2",
    title: "التعليم الخاص",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
    icon: reading,
    color: "bg-[#5D50C6]"
  },
  {
    id: "3",
    title: "الكتاب والمكتبة",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
    icon: bookAndLibrary,
    color: "bg-[#1EAAF1]"
  },
  {
    id: "4",
    title: "شهادة",
    text: "حتى الإشارة القوية ليس لها سيطرة على النصوص العمياء فهي غير تقليدية تقريبًا.",
    icon: certification,
    color: "bg-[#8CC152]"
  }
]

export const offersInfo =[
  {
    id: "1",
    icon: safety,
    title: "أولوية الأمان",
    text: "فقط مجرد نص ما باللغة العربية  فقط مجرد نص ما باللغة العربية"
  },
  {
    id: "2",
    icon: readingWhite,
    title: "صفوف نظامية",
    text: "فقط مجرد نص ما باللغة العربية  فقط مجرد نص ما باللغة العربية"
  },
  {
    id: "3",
    icon: certificationWhite,
    title: "أساتذة معتمدون",
    text: "فقط مجرد نص ما باللغة العربية  فقط مجرد نص ما باللغة العربية"
  },
  {
    id: "4",
    icon: education,
    title: "طلاب جيدين",
    text: "فقط مجرد نص ما باللغة العربية  فقط مجرد نص ما باللغة العربية"
  },
  {
    id: "5",
    icon: creative,
    title: "دروس تفاعلية",
    text: "فقط مجرد نص ما باللغة العربية  فقط مجرد نص ما باللغة العربية"
  },
  {
    id: "6",
    icon: playing,
    title: "نشاطات رياضية",
    text: "فقط مجرد نص ما باللغة العربية  فقط مجرد نص ما باللغة العربية"
  },
]