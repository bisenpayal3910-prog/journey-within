
// ==================================
// JOURNEY WITHIN - JAVASCRIPT
// ==================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    });

});


// 2. DARK AND LIGHT MODE

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("journeyTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeToggle.textContent = "☀";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀" : "☾";

    localStorage.setItem(
        "journeyTheme",
        isDark ? "dark" : "light"
    );

});


// 3. DAILY SUVICHAR

const thoughts = [

    "Peace begins when we learn to control our thoughts, not the world around us.",

    "A positive mind creates a beautiful life.",

    "Forgiveness is the first step towards inner peace.",

    "Your thoughts shape your feelings and your actions.",

    "Be kind to yourself. Every day is a new beginning.",

    "Silence is not emptiness. It is full of peace.",

    "Change yourself and the world around you will feel different."

];

const dailyThought = document.getElementById("dailyThought");

const newThought = document.getElementById("newThought");

let currentThought = 0;

newThought.addEventListener("click", () => {

    currentThought++;

    if (currentThought >= thoughts.length) {
        currentThought = 0;
    }

    dailyThought.textContent = thoughts[currentThought];

});


// 4. CONSOLE MESSAGE

console.log(
    "Welcome to Journey Within - Your journey towards inner peace begins here!"
);
