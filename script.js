const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const finalMessage = document.getElementById("finalMessage");

// 🔥 Estado inicial seguro
window.onload = () => {
    letter.classList.add("hidden");
    gallery.classList.add("hidden");
    finalMessage.classList.add("hidden");
};

// Iniciar
function startExperience() {
    startScreen.style.display = "none";
    mainContent.classList.remove("hidden");
    createHearts();
}

// Carta
function openLetter() {
    letter.classList.remove("hidden");
}

// Galería
function showGallery() {
    gallery.classList.remove("hidden");

    setTimeout(() => {
        finalMessage.classList.remove("hidden");
    }, 3000);
    gallery.scrollIntoView({ behavior: "smooth" });

}

// Corazones
function createHearts() {
    const container = document.getElementById("hearts");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 500);
}
