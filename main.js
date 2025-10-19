// ===== Navbar Active Link on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {{
  let current = "";}
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
};

// ===== Contact Form (Formspree integration) =====
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    status.textContent = "Message sent successfully!";
    form.reset();
  } else {
    status.textContent = "Oops! There was a problem sending your message.";
  }
});
