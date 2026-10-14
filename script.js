document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing");

    const roles = [
        "Data Analyst",
        "Frontend Developer",
        "Android App Developer",
        "Software Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        if (!typingElement) return;

        const currentRole = roles[roleIndex];

        typingElement.textContent = deleting
            ? currentRole.substring(0, charIndex - 1)
            : currentRole.substring(0, charIndex + 1);

        charIndex += deleting ? -1 : 1;

        let delay = deleting ? 45 : 85;

        if (!deleting && charIndex === currentRole.length) {
            deleting = true;
            delay = 1400;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 300;
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".header nav");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function closeMenu() {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    const sections = document.querySelectorAll("main section[id]");
    const backToTop = document.getElementById("back-to-top");

    function updatePageState() {
        let currentSection = "home";

        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= 150) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            const isActive =
                link.getAttribute("href") === `#${currentSection}`;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        backToTop.classList.toggle("visible", window.scrollY > 350);
    }

    let scrollScheduled = false;

    window.addEventListener("scroll", () => {
        if (scrollScheduled) return;

        scrollScheduled = true;

        requestAnimationFrame(() => {
            updatePageState();
            scrollScheduled = false;
        });
    }, { passive: true });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    document.getElementById("year").textContent =
        new Date().getFullYear();

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });

    console.log(
        "%cAbhishek Kaushik | Portfolio",
        "color:#60a5fa;font-size:16px;font-weight:bold"
    );
});
