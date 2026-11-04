
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




// ==================================
// DAY 2 - SPIRITUAL KNOWLEDGE
// ==================================


// 1. SPIRITUAL TOPIC INFORMATION

const spiritualTopics = {

    soul: {
        title: "Soul (Atma)",
        description: `Brahma Kumaris ki spiritual teachings ke anusaar, Atma ek conscious, eternal point of spiritual energy hai.

Atma ko physical body se alag samjha jata hai. Body physical hai, jabki soul ko thoughts, feelings, awareness aur experiences se joda jata hai.

Soul consciousness ka meaning hai apne aap ko sirf body ke roop mein nahi, balki ek spiritual being ke roop mein samajhna.

Reflection:
Main kaun hoon? Mere thoughts kaise meri life ko affect karte hain?`
    },

    supreme: {
        title: "Supreme Soul (Paramatma)",
        description: `Brahma Kumaris ki teachings mein Supreme Soul ko Paramatma kaha jata hai.

Is spiritual belief ke anusaar Paramatma ko supreme, eternal spiritual being mana jata hai.

Rajyoga meditation mein soul aur Supreme Soul ke spiritual connection par focus kiya jata hai.

Reflection:
Peace, love aur purity jaise qualities ko apni life mein kaise develop karein?`
    },

    karma: {
        title: "Karma Philosophy",
        description: `Karma ka arth hai actions.

Hamare thoughts, words aur actions hamare behaviour aur relationships ko influence karte hain.

Brahma Kumaris ki teachings mein karma ko spiritual life ka important principle mana jata hai.

Reflection:
Kya mere actions dusron ko happiness aur respect dete hain?`
    },

    mind: {
        title: "Mind & Intellect",
        description: `Brahma Kumaris ki spiritual understanding mein mind aur intellect ke alag roles bataye gaye hain.

Mind thoughts aur feelings create karta hai.

Intellect thoughts ko samajhne, evaluate karne aur decisions lene mein help karta hai.

Reflection:
Kisi difficult situation mein response dene se pehle rukkar sochna seekhein.`
    },

    vices: {
        title: "Five Vices",
        description: `Brahma Kumaris ki teachings mein five vices ko inner transformation ki important challenges mana jata hai.

1. Lust - Kaam
2. Anger - Krodh
3. Greed - Lobh
4. Attachment - Moh
5. Ego - Ahankar

In par awareness aur self-discipline ke through kaam karne ki guidance di jati hai.

Reflection:
Aaj main apne behaviour mein kaunsa positive change la sakta hoon?`
    },

    yugas: {
        title: "Four Yugas",
        description: `Brahma Kumaris ke spiritual worldview mein time cycle ko four Yugas mein samjhaya jata hai.

1. Satya Yuga - Golden Age
2. Treta Yuga - Silver Age
3. Dwapar Yuga - Copper Age
4. Kali Yuga - Iron Age

Inhe ek spiritual cycle ke roop mein samjhaya jata hai.

Note: Ye organization ki spiritual teaching hai, established scientific historical chronology nahi.`
    }

};


// 2. MODAL ELEMENTS

const topicModal = document.getElementById("topicModal");

const topicTitle = document.getElementById("topicTitle");

const topicDescription =
    document.getElementById("topicDescription");

const closeTopic =
    document.getElementById("closeTopic");


// 3. OPEN TOPIC MODAL

document.querySelectorAll(".spiritual-card").forEach(card => {

    card.addEventListener("click", () => {

        const topic = card.dataset.topic;

        const selectedTopic = spiritualTopics[topic];

        if (!selectedTopic) return;

        topicTitle.textContent = selectedTopic.title;

        topicDescription.textContent =
            selectedTopic.description;

        topicModal.classList.add("active");

        topicModal.setAttribute("aria-hidden", "false");

    });

});


// 4. CLOSE MODAL

function hideTopicModal() {

    topicModal.classList.remove("active");

    topicModal.setAttribute("aria-hidden", "true");

}

closeTopic.addEventListener("click", hideTopicModal);


// Close by clicking outside the modal

topicModal.addEventListener("click", (event) => {

    if (event.target === topicModal) {
        hideTopicModal();
    }

});


// Close using Escape key

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        topicModal.classList.contains("active")
    ) {
        hideTopicModal();
    }

});

console.log("Day 2 Spiritual Knowledge Loaded!");
