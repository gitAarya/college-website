// import './style.css'
import "./output.css";
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

const menu = document.getElementById("main-menu");
const nav = document.getElementById("ulNav");
// const navLi=document.getElementsByClassName('list-item')
const programs = document.getElementById("programList");
const programsIcon = document.getElementById("programListIcon");


const programList = document.getElementById("list");
const toggleBtn = document.getElementById("toggleMenu");

// displaying menu option on smaller screen
toggleBtn.addEventListener("click", (e) => {
  // Toggle between 'menu' and 'close' icons
  e.target.name =
    e.target.name === "menu-outline" ? "close-outline" : "menu-outline";
});

//showing the header menu on mobile screeen
toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  menu.classList.toggle("text-black");
  menu.classList.toggle("absolute");
  menu.classList.toggle("bg-white");
  menu.classList.toggle("w-full");
  menu.classList.toggle("left-0");
  menu.classList.toggle("top-[7.23%]");
  menu.classList.toggle("px-5");
  menu.classList.toggle("py-8");
  menu.classList.toggle("flex-col");
  nav.classList.toggle("flex-col");
});

//showin the programs 
programs.addEventListener("click", () => {
  programList.classList.toggle("hidden");
});
programsIcon.addEventListener("click", () => {
  programList.classList.toggle("hidden");
});

// -------------------
//displaying teh slides 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

window.addEventListener('click',()=>{
  document.getElementById('nav').classList.toggle("bg-black")
  console.log("clicked");
  
})