// // alert("WELCOME TO ALI RAZA BILAL PROFILE PAGE");

// let projectselector = document.getElementById("projectselector");
// projectselector.addEventListener("click", function () {
//   alert("This is a project page");
//   projectselector.innerText = "CLICKED ON PROJECT";
// });

// let hardskillsselector = document.getElementById("skills-selector");
// hardskillsselector.addEventListener("click", function () {
//   alert("This is a project page");
//   hardskillsselector.innerText = "CLICKED ON HARD SKILLS";
// });

// let softskillsselector = document.getElementById("skills-selector-soft");
// softskillsselector.addEventListener("click", function () {
//   alert("This is a project page");
//   softskillsselector.innerText = "CLICKED ON SOFT SKILLS";
// });

// let introalert = document.getElementById("intro-alert");
// let introalertarabic = document.getElementById("intro-alert-arabic");
// introalert.addEventListener("click", function () {
//   alert("YES THIS IS ME , ALI RAZA BILAL");
//   introalert.innerText = "YES, I'm ALI RAZA BILAL";
//   introalertarabic.innerText = "نعم, انا علي رضا بلال";
// });

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

let introname = document.getElementById("intro-alert");
introname.innerText = profileData.intro_name;

let intronamearabic = document.getElementById("intro-alert-arabic");
intronamearabic.innerText = profileData.intro_name_arabic;

let introparaarabic = document.getElementById("intro-para-arabic");
introparaarabic.innerText = profileData.intro_para_arabic;

let intropara = document.getElementById("intro-para");
intropara.innerText = profileData.intro_para;

let introparaurdu = document.getElementById("intro-para-urdu");
introparaurdu.innerText = profileData.intro_para_urdu;

let pic2 = document.getElementById("pic2_select");
pic2.setAttribute("src", profileData.pic2.pic2_src);
pic2.setAttribute("alt", profileData.pic2.pic2_alt);

let skillselectorhard = document.getElementById("skills-selector");
skillselectorhard.innerText = profileData.hard_skill_heading;

let skillselectorarabic = document.getElementById("skills-selector-arabic");
skillselectorarabic.innerText = profileData.hard_skill_heading_arabic;

const skillslisthard = document.querySelector(".skills-list-hard");
profileData.hard_skills_list.forEach((skill) => {
  const listitemhard = document.createElement("li");
  listitemhard.textContent = skill;
  skillslisthard.appendChild(listitemhard);
});

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

let videoheading = document.getElementById("video-heading");
videoheading.innerText = profileData.video_heading;

let videoheadingarabic = document.getElementById("video-heading-arabic");
videoheadingarabic.innerText = profileData.video_heading_arabic;

let videocontent = document.getElementById("video-content-1");
videocontent.setAttribute("src", profileData.video_content_1.src);
videocontent.setAttribute("title", profileData.video_content_1.title);

let socialmediaheading = document.getElementById("social-media-heading");
socialmediaheading.innerText = profileData.social_media_heading;

let socialmediaheadingarabic = document.getElementById(
  "social-media-heading-arabic"
);
socialmediaheadingarabic.innerText = profileData.social_media_heading_arabic;

// critical section

let sociallinks = document.querySelector(".links-social");
profileData.social_media_links.forEach((item) => {
  const list = document.createElement("li");
  list.classList.add("elements-social");
  const link = document.createElement("a");
  link.classList.add("links");
  link.href = item.href;
  link.innerText = item.name;

  list.appendChild(link);
  sociallinks.appendChild(list);
});

let projectheading = document.getElementById("projectselector");
projectheading.innerText = profileData.project_heading;

let projectselectorarabic = document.getElementById("projectselector-arabic");
projectselectorarabic.innerText = profileData.project_heading_arabic;

//critical section
let projects = document.querySelector(".project-list");
profileData.projects_list.forEach((project) => {
  const list = document.createElement("li");
  list.classList.add("project-li");
  list.textContent = project;
  projects.appendChild(list);
});

let certificateheading = document.getElementById("certificate");
certificateheading.innerText = profileData.certificate_heading;

let certificateheadingarabic = document.getElementById("certificate-arabic");
certificateheadingarabic.innerText = profileData.certificate_heading_arabic;

let certiimages = document.querySelector(".coloring");
profileData.certificate_images.forEach((item) => {
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;
  img.classList.add(profileData.certificate_images.cls);

  certiimages.appendChild(img);
});

let degreeheading = document.getElementById("degree-heading");
degreeheading.innerText = profileData.degree_heading;

let degreeheadingarabic = document.getElementById("degree-heading-arabic");
degreeheadingarabic.innerText = profileData.degree_heading_arabic;

let degreeimg = document.querySelector(".coloring2");
profileData.degree_image.forEach((image) => {
  const img = document.createElement("img");
  img.classList.add(image.cls);
  img.src = image.src;
  img.alt = image.alt;

  degreeimg.appendChild(img);
});

let footertext = document.getElementById("footer-text");
footertext.innerText = profileData.footer_text;
