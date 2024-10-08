let profileData = {
  intro_name: "ALI RAZA BILAL",
  intro_para:
    "CS undergraduate student who is fond of coding and gathering information about the trends in today's IT market. Passionate about exploring emerging technologies and their applications. Eager to contribute to innovative projects",
  intro_para_arabic:
    "طالب جامعي في علوم الكمبيوتر مغرم بالبرمجة وجمع المعلومات حول الاتجاهات السائدة في سوق تكنولوجيا المعلومات اليوم. شغوف باستكشاف التقنيات الناشئة وتطبيقاتها. حريص على المساهمة في المشاريع المبتكرة.",
  intro_name_arabic: "   علي رضا بلال",
  intro_para_urdu:
    " CS انڈرگریجویٹ طالب علم جو کوڈنگ اور آج کی IT مارکیٹ کے رجحانات کے بارے میں معلومات اکٹھا کرنے کا شوق رکھتہ ہے۔ ابھرتی ہوئی ٹکنالوجیوں اور ان کی ایپلی کیشنز کو تلاش کرنے کے بارے میں پرجوش۔ جدید منصوبوں میں حصہ ڈالنے کے خواہشمند۔",
  intro_para_arabic:
    "طالب جامعي في علوم الكمبيوتر مغرم بالبرمجة وجمع المعلومات حول الاتجاهات السائدة في سوق تكنولوجيا المعلومات اليوم. شغوف باستكشاف التقنيات الناشئة وتطبيقاتها. حريص على المساهمة في المشاريع المبتكرة.",

  pic2: {
    pic2_src: "pic2.png",
    pic2_alt: "Ali Raza Bilal",
  },
  hard_skill_heading: "Hard Skills: ",
  hard_skill_heading_arabic: "المهارات الصعبة: ",

  hard_skills_list: [
    "C++ Programming (Object-Oriented)",
    "Python - OOP + numpy",
    "Data Structures and Algorithms",
    "NodeJS",
    "ExpressJS",
    "SQL",
    "MongoDB",
    "Git/GitHub",
    "EJS",
    "HTML, CSS, JavaScript",
    "Bootstrap + Tailwind",
    "Figma Design",
    "Coding",
    "Linear Algebra Programming/li>",
    "FULL STACK WEB DEVELOPMENT (BASICS)",
    "VIDEO EDITING",
    "PHOTOS EDITING",
  ],

  soft_skill_heading: "Soft Skills: ",
  soft_skill_heading_arabic: "المهارات الناعمة",
  soft_skills_list: [
    "Critical Thinking",
    "Strong Communication",
    "Team working behaviour",
    "Problem Solving",
    "Caring",
    "Active Listener",
    "Love For Nature",
    "Travelling",
    "Exploring",
    "Learning",
    "Motivating",
  ],
  video_heading: "Video Content: ",
  video_heading_arabic: "محتوى الفيديو",
  video_content_1: {
    src: "https://www.youtube.com/embed/yKTVqPaNJIw?si=eHnLOQgGIHraOlFR",
    title: "YouTube video player",
  },

  social_media_heading: "Social Media Feed: ",
  social_media_heading_arabic: "تغذية وسائل التواصل الاجتماعي",
  social_media_links: [
    { href: "https://www.facebook.com/ali.razabilal.98", name: "FACEBOOK" },
    { href: "https://www.facebook.com/ali.razabilal.98", name: "FACEBOOK" },
    { href: "https://www.facebook.com/ali.razabilal.98", name: "FACEBOOK" },
    { href: "https://www.facebook.com/ali.razabilal.98", name: "FACEBOOK" },
  ],
  project_heading: "Projects: ",
  project_heading_arabic: "المشاريع",
  projects_list: [
    "CHESS GAME - MADE IN 2022 - C++",
    "TICTACTOE GAME - MADE IN 2022 - C++",
    "12 BEADS GAME - MADE IN 2022 - C++",
    "SNAKE GAME - MADE IN 2022 - C++",
    "LUDO GAME - MADE IN 2022 - C++",
    "MS PAINT GAME - MADE IN 2022 - PYTHON",
    "MONGODB CLONE GAME - MADE IN 2022 - C++",
    "VEHICLE SYSTEM - MADE IN 2022 - MERN",
    "FLIGHT SYSTEM - MADE IN 2022 - MERN",
  ],
  certificate_heading: "Training Certificates:",
  certificate_heading_arabic: "شهادات التدريب: ",
  certificate_images: [
    { src: "qwerty certificate.jpg", alt: "certificate", cls: "img1" },
    { src: "qwerty certificate 2.jpg", alt: "certificate2", cls: "img2" },
  ],
  degree_heading: "Degree Program: (BSCS)",
  degree_heading_arabic: "تعليم",
  degree_image: [{ src: "res.png", alt: "result", cls: "img3" }],
  footer_text: "MADE BY : ALI RAZA BILAL",
};

let skillsselectorsoft = document.getElementById("skills-selector-soft");
skillsselectorsoft.innerText = profileData.soft_skill_heading;

let skillsselectorsoftarabic = document.getElementById(
  "skills-selector-soft-arabic"
);
skillsselectorsoftarabic.innerText = profileData.soft_skill_heading_arabic;

let skillslistsoft = document.querySelector(".skills-list-soft");
profileData.soft_skills_list.forEach((skill2) => {
  const listitemsoft = document.createElement("li");
  listitemsoft.textContent = skill2;
  skillslistsoft.appendChild(listitemsoft);
});
