const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
e.preventDefault();
const name = document.getElementById("name").value.trim();
const service = document.getElementById("service").value;

formStatus.textContent = Thank you, ${name}! Your ${service} request has been received. We will call you shortly.;
contactForm.reset();
});