// import './style.css'
import "./output.css";

const menu = document.getElementById("main-menu");
const nav = document.getElementById("ulNav");
// const navLi=document.getElementsByClassName('list-item')
const programs = document.getElementById("programList");
const programs1 = document.getElementById("programList1");


const programList = document.getElementById("list");

const toggleBtn = document.getElementById("toggleMenu");
toggleBtn.addEventListener("click", (e) => {
  // Toggle between 'menu' and 'close' icons
  e.target.name =
    e.target.name === "menu-outline" ? "close-outline" : "menu-outline";
});
toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  menu.classList.toggle("absolute");
  menu.classList.toggle("bg-white");
  menu.classList.toggle("w-full");
  menu.classList.toggle("left-0");
  menu.classList.toggle("top-[7.23%]");
  menu.classList.toggle("px-5");
  menu.classList.toggle("py-8");
  menu.classList.toggle("flex-col");
  nav.classList.toggle("flex-col");
  navLi.classList.toggle('border-[2px]')

  console.log("clicked");
});

programs.addEventListener("click", () => {
  programList.classList.toggle("hidden");
});
programs1.addEventListener("click", () => {
  programList.classList.toggle("hidden");
});

