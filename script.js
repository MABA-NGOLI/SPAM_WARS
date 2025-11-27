
const container = document.querySelector(".falling-text-container");

const items = [
    "BREAKING NEWS",
    "ALERT",
    "SPAM ALERT",
    "<img src='./images/img2.png'>"
];

function createFallingItem() {
    const el = document.createElement("span");
    el.className = "falling-text";

    const content = items[Math.floor(Math.random() * items.length)];
    el.innerHTML = content;

    
    el.style.left = Math.random() * 100 + "vw";

    
    const duration = 4 + Math.random() * 8;
    el.style.animationDuration = duration + "s";

    
    el.style.animationDelay = (Math.random() * 2) + "s";

    container.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, duration * 1000 + 2000);
}

setInterval(createFallingItem, 600);
