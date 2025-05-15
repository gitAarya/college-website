// Scroll animations

export function initScrollAnimations() {
  // Get all elements with slide-up or fade-in classes
  const animatedElements = document.querySelectorAll(".slide-up, .fade-in");

  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  // Add active class to visible elements
  function animateOnScroll() {
    animatedElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("active");
      }
    });
  }

  // Run on page load
  animateOnScroll();

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Parallax effect for hero images
  const parallaxElements = document.querySelectorAll(".parallax");

  function updateParallax() {
    parallaxElements.forEach((element) => {
      const scrollPosition = window.pageYOffset;
      element.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
    });
  }

  window.addEventListener("scroll", updateParallax);
}
