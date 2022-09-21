const hobby = document.getElementById("hobby");
const skill = document.getElementById("skill");
const nummer = document.getElementById("nummer");
const film = document.getElementById("film");

const hobbyOverlay = document.getElementById("hobbyOverlay");
const skillOverlay = document.getElementById("skillOverlay");
const nummerOverlay = document.getElementById("nummerOverlay");
const filmOverlay = document.getElementById("filmOverlay");

const close = document.getElementById("closeOverlay");

console.log(document.getElementById("skill").children[0].innerHTML);

hobby.addEventListener("click", function() {
  hobbyOverlay.style.bottom = "0";
});

skill.addEventListener("click", function() {
  document.getElementById("skillOverlay").style.bottom = "0";
});

nummer.addEventListener("click", function() {
  document.getElementById("nummerOverlay").style.bottom = "0";
});

film.addEventListener("click", function() {
  document.getElementById("filmOverlay").style.bottom = "0";
});

hobbyOverlay.querySelector("p").addEventListener("click", function() {
  hobbyOverlay.style.bottom = "-100%";
});

skillOverlay.querySelector("p").addEventListener("click", function() {
  skillOverlay.style.bottom = "-100%";
});

nummerOverlay.querySelector("p").addEventListener("click", function() {
  nummerOverlay.style.bottom = "-100%";
});

filmOverlay.querySelector("p").addEventListener("click", function() {
  filmOverlay.style.bottom = "-100%";
});