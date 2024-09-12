alert("WELCOME TO ALI RAZA BILAL PROFILE PAGE");

let projectselector = document.getElementById("projectselector");
projectselector.addEventListener("click", function () {
  alert("This is a project page");
  projectselector.innerText = "CLICKED ON PROJECT";
});
