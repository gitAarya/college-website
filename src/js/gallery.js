// Image gallery functionality

export function initGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxNext = document.getElementById("lightbox-next");
  const lightboxPrev = document.getElementById("lightbox-prev");

  if (!galleryItems.length || !lightbox || !lightboxImage) return;

  let currentIndex = 0;

  // Open lightbox when clicking on gallery item
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentIndex = index;
      const imgSrc =
        item.getAttribute("data-src") || item.querySelector("img").src;
      lightboxImage.src = imgSrc;
      lightbox.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  });

  // Close lightbox
  if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.add("hidden");
      document.body.style.overflow = ""; // Enable scrolling
    });
  }

  // Navigate to next image
  if (lightboxNext) {
    lightboxNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      const nextItem = galleryItems[currentIndex];
      const imgSrc =
        nextItem.getAttribute("data-src") || nextItem.querySelector("img").src;
      lightboxImage.src = imgSrc;
    });
  }

  // Navigate to previous image
  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      const prevItem = galleryItems[currentIndex];
      const imgSrc =
        prevItem.getAttribute("data-src") || prevItem.querySelector("img").src;
      lightboxImage.src = imgSrc;
    });
  }

  // Close lightbox when clicking outside image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
      document.body.style.overflow = ""; // Enable scrolling
    }
  });

  // Close lightbox with escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      lightbox.classList.add("hidden");
      document.body.style.overflow = ""; // Enable scrolling
    }

    // Navigate with arrow keys
    if (!lightbox.classList.contains("hidden")) {
      if (e.key === "ArrowRight") {
        lightboxNext.click();
      } else if (e.key === "ArrowLeft") {
        lightboxPrev.click();
      }
    }
  });

  // Handle gallery filtering
  const galleryFilters = document.querySelectorAll(".gallery-filter");

  if (galleryFilters.length) {
    galleryFilters.forEach((filter) => {
      filter.addEventListener("click", () => {
        // Remove active class from all filters
        galleryFilters.forEach((f) =>
          f.classList.remove("active", "bg-primary-600", "text-white")
        );

        // Add active class to clicked filter
        filter.classList.add("active", "bg-primary-600", "text-white");

        const filterValue = filter.getAttribute("data-filter");

        // Show/hide gallery items based on filter
        galleryItems.forEach((item) => {
          if (filterValue === "all" || item.classList.contains(filterValue)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
}
