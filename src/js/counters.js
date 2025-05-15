// Statistics counters animation

export function initCounters() {
  const counters = document.querySelectorAll(".counter");

  if (!counters.length) return;

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 16ms per frame (approx 60fps)

    let current = 0;
    const startTime = performance.now();

    function updateCounter(timestamp) {
      const elapsed = timestamp - startTime;
      current = Math.min(target, Math.floor(step * elapsed));
      counter.textContent = current;

      if (current < target) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  let animated = false;

  function checkCounters() {
    if (!animated && isInViewport(counters[0])) {
      counters.forEach((counter) => {
        animateCounter(counter);
      });
      animated = true;
    }
  }

  // Check on scroll
  window.addEventListener("scroll", checkCounters);

  // Initial check
  checkCounters();
}
