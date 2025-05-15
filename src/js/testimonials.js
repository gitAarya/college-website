// Testimonials carousel

export function initTestimonials() {
  const testimonialContainer = document.querySelector(".testimonial-container");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("testimonial-prev");
  const nextBtn = document.getElementById("testimonial-next");
  const indicators = document.querySelectorAll(".testimonial-indicator");

  if (!testimonialContainer || !testimonials.length) return;

  let currentIndex = 0;
  const testimonialCount = testimonials.length;

  // Function to show specific testimonial
  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.add("hidden");

      if (indicators[i]) {
        indicators[i].classList.remove("bg-primary-600");
        indicators[i].classList.add("bg-gray-300");
      }
    });

    // Show testimonial at specified index
    testimonials[index].classList.remove("hidden");

    // Update indicator
    if (indicators[index]) {
      indicators[index].classList.remove("bg-gray-300");
      indicators[index].classList.add("bg-primary-600");
    }

    currentIndex = index;
  }

  // Next testimonial
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const newIndex = (currentIndex + 1) % testimonialCount;
      showTestimonial(newIndex);
    });
  }

  // Previous testimonial
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const newIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
      showTestimonial(newIndex);
    });
  }

  // Click on indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showTestimonial(index);
    });
  });

  // Auto advance every 5 seconds
  let autoplayInterval;

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      const newIndex = (currentIndex + 1) % testimonialCount;
      showTestimonial(newIndex);
    }, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Start autoplay
  startAutoplay();

  // Pause autoplay on hover
  testimonialContainer.addEventListener("mouseenter", stopAutoplay);
  testimonialContainer.addEventListener("mouseleave", startAutoplay);

  // Show first testimonial
  showTestimonial(0);
}
