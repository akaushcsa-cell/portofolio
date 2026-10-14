const textList = [
    "Data Analyst",
    "Frontend Developer",
    "Android App Developer",
    "Software Developer"
];

const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = textList[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex++);

        if (charIndex > currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= textList.length)
                textIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "#0b1120";
        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.4)";

    } else {

        header.style.background = "#111827";
        header.style.boxShadow =
            "0 5px 15px rgba(0,0,0,.25)";

    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

const revealItems =
    document.querySelectorAll(".card,.project,.about,.contact");

function reveal() {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop =
            item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s";

});

window.addEventListener("scroll", reveal);

reveal();

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.id = "topBtn";

Object.assign(topButton.style, {

    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    zIndex: "1000",
    transition: ".3s"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});

console.log("%cWelcome to Abhishek Kaushik Portfolio",
    "color:#3b82f6;font-size:18px;font-weight:bold");

console.log("Thank you for visiting.");