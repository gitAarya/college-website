// import './style.css'
import "./output.css";

import { initGallery } from "./js/gallery.js";
import { initTestimonials } from "./js/testimonials.js";
import { initCounters } from "./js/counters.js";
import { initContactForm } from "./js/contact.js";

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  
  // Initialize image gallery
  // initGallery();
  
  // Initialize testimonials carousel
  initTestimonials();
  
  // Initialize stats counters
  // initCounters();
  
  // Initialize contact form
  // initContactForm();
  
  // Initialize current year for footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
});



const menu = document.getElementById("main-menu");
const nav = document.getElementById("ulNav");
// const navLi=document.getElementsByClassName('list-item')
const programs = document.getElementById("programList");
const programsIcon = document.getElementById("programListIcon");

const programList = document.getElementById("list");
const toggleBtn = document.getElementById("toggleMenu");

const logo = document.getElementById("collegeLogo");
const header = document.querySelector("header");
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
  menu.classList.toggle("text-black");
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
    delay: 2700,
    disableOnInteraction: false,
  },
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("bg-white");
    faculty.classList.add('bg-white')

    header.classList.remove("text-white");
  } else {
    header.classList.remove("bg-white");
    header.classList.add("text-white");
    faculty.classList.remove("bg-white");
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".flex.transition-transform");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('button[aria-label="Next testimonial"]');
    const prevButton = document.querySelector('button[aria-label="Previous testimonial"]');
    const indicators = document.querySelectorAll(".flex.space-x-2 span");

    let currentIndex = 0;

    function updateCarousel() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      indicators.forEach((dot, index) => {
        dot.classList.remove("bg-amber-500");
        dot.classList.add("bg-white/50");
        if (index === currentIndex) {
          dot.classList.add("bg-amber-500");
          dot.classList.remove("bg-white/50");
        }
      });
    }

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    indicators.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    window.addEventListener("resize", updateCarousel);
  });

  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper.students", {
      // Swiper automatically detects Navigation/Pagination from CDN
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });


  document.querySelector("form").addEventListener("submit", function (e) {
    const emailInput = this.querySelector('input[type="email"]');

    if (!emailInput.value.includes("@")) {
      e.preventDefault();
      emailInput.classList.add("border-red-500");
      alert("Please enter a valid email address");
    }
  });