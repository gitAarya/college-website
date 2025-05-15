// Contact form functionality

export function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("contact-submit");
  const formResponse = document.getElementById("form-response");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      phone: contactForm.phone ? contactForm.phone.value : "",
      subject: contactForm.subject ? contactForm.subject.value : "",
      message: contactForm.message.value,
    };

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      showFormResponse("Please fill in all required fields.", "error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showFormResponse("Please enter a valid email address.", "error");
      return;
    }

    // Simulate form submission
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<span class="animate-spin inline-block mr-2">⟳</span> Sending...';
    }

    // In a real application, you would send this data to a server
    // Since this is a static website, we'll simulate a successful submission
    setTimeout(() => {
      showFormResponse(
        "Thank you for your message! We will get back to you soon.",
        "success"
      );
      contactForm.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Send Message";
      }
    }, 1500);
  });

  function showFormResponse(message, type) {
    if (!formResponse) return;

    formResponse.textContent = message;
    formResponse.classList.remove("hidden", "text-green-600", "text-red-600");

    if (type === "success") {
      formResponse.classList.add("text-green-600");
    } else {
      formResponse.classList.add("text-red-600");
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
      formResponse.classList.add("hidden");
    }, 5000);
  }
}
