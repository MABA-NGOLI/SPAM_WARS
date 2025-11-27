
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

setInterval(createFallingItem, 1200);


document.querySelectorAll('.spec .toggle-icon').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation();

    const article = icon.closest('.spec');
    const title = article.querySelector('.card-title');
    const p = article.querySelector('p');

    // Vérifier si l'image existe déjà
    let img = article.querySelector('.card-image');
    if (!img) {
      img = document.createElement('img');
      img.src = article.getAttribute('data-image');
      img.classList.add('card-image');
      article.appendChild(img);
    }

    // Toggle affichage
    const isVisible = img.style.display === 'block';
    if (!isVisible) {
      title.style.display = 'none';
      p.style.display = 'none';
      img.style.display = 'block';
    } else {
      title.style.display = 'inline'; // garde l'icône visible
      p.style.display = 'block';
      img.style.display = 'none';
    }
  });
});

