// ===============================
// Allied Development Venture Website JS
// ===============================


// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// ===== Close menu when clicking link (mobile UX improvement) =====
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===== Contact Form Validation =====
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !phone || !message) {
            alert("Please fill all fields.");
            e.preventDefault();
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter valid email.");
            e.preventDefault();
            return;
        }

        if (phone.length < 10) {
            alert("Please enter valid phone number.");
            e.preventDefault();
            return;
        }

        alert("Consultation request submitted successfully!");
    });
}


// ===== Email Validation Function =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


// ===== Navbar Shadow on Scroll =====
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// ===== Fade-in Animation on Scroll =====
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".service-card, .industry-card").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});