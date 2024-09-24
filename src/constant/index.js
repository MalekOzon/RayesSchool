import {
  bookAndLibrary,
  card,
  certification,
  imageSlider1 ,imageSlider2, 
  reading, 
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
    url: imageSlider1,
    caption: "اولادك امانة لدينا"
  },
  {
    id: "3",
    title: "picture3",
    url: imageSlider1,
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
