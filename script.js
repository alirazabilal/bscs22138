// alert("WELCOME TO ALI RAZA BILAL PROFILE PAGE");

let projectselector = document.getElementById("projectselector");
projectselector.addEventListener("click", function () {
  alert("This is a project page");
  projectselector.innerText = "CLICKED ON PROJECT";
});

let hardskillsselector = document.getElementById("skills-selector");
hardskillsselector.addEventListener("click", function () {
  alert("This is a project page");
  hardskillsselector.innerText = "CLICKED ON HARD SKILLS";
});

let softskillsselector = document.getElementById("skills-selector-soft");
softskillsselector.addEventListener("click", function () {
  alert("This is a project page");
  softskillsselector.innerText = "CLICKED ON SOFT SKILLS";
});

let introalert = document.getElementById("intro-alert");
let introalertarabic = document.getElementById("intro-alert-arabic");
introalert.addEventListener("click", function () {
  alert("YES THIS IS ME , ALI RAZA BILAL");
  introalert.innerText = "YES, I'm ALI RAZA BILAL";
  introalertarabic.innerText = "نعم, انا علي رضا بلال";
});
