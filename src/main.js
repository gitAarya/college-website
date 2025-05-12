// import './style.css'
import "./output.css";

const menu = document.getElementById("main-menu");
const nav = document.getElementById("ulNav");
// const navLi=document.getElementsByClassName('list-item')
const programs = document.getElementById("programList");
const programsIcon = document.getElementById("programListIcon");


const programList = document.getElementById("list");
const toggleBtn = document.getElementById("toggleMenu");

const logo= document.getElementById('collegeLogo')
const header=document.querySelector('header')
const faculty = document.getElementById("faculty");

// displaying menu option on smaller screen
toggleBtn.addEventListener("click", (e) => {
  // Toggle between 'menu' and 'close' icons
  e.target.name =
    e.target.name === "menu-outline" ? "close-outline" : "menu-outline";
});

//showing the header menu on mobile screeen
toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  menu.classList.toggle("absolute");
  menu.classList.toggle("bg-white");
  menu.classList.toggle('text-black')
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
  faculty.classList.toggle("text=black");
});
programsIcon.addEventListener("click", () => {
  programList.classList.toggle("hidden");
  faculty.classList.toggle("text=black");
});

// -------------------
//displaying the slides 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 552700,
    disableOnInteraction: false,
  },
});

document.addEventListener('scroll',()=>{
  
  if(window.scrollY >0){
     header.classList.add('bg-white')

     header.classList.remove('text-white')
   
  }
  else {
    header.classList.remove('bg-white')
     header.classList.add('text-white')
   
  }
})
