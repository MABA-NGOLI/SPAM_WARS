
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

setInterval(createFallingItem, 1000);


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


(function(){
  const btn = document.getElementById('scrollTop');

  // Si l'ancre #top n'existe pas, crée-la en haut du body pour que le lien fonctionne correctement
  if (!document.getElementById('top')) {
    const topAnchor = document.createElement('div');
    topAnchor.id = 'top';
    topAnchor.style.position = 'relative';
    topAnchor.style.top = '0';
    document.body.insertBefore(topAnchor, document.body.firstChild);
  }

  // Montrer le bouton après un certain scroll (adapte le seuil selon besoin)
  const SHOW_AFTER = 180; // px

  const onScroll = () => {
    if (window.scrollY > SHOW_AFTER) btn.classList.add('show');
    else btn.classList.remove('show');
  };

  // debounce léger pour perf
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, {passive: true});

  // clic : smooth scroll with fallback (respect prefers-reduced-motion)
  btn.addEventListener('click', (e) => {
    // si c'est un <a href="#top">, browser ferait déjà le jump ; on intercepte pour smooth
    e.preventDefault();

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      window.scrollTo(0,0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // pour accessibilité : renvoyer le focus au contenu principal si tu as un élément #main
    const main = document.getElementById('main') || document.querySelector('main');
    if (main) main.setAttribute('tabindex', '-1'), main.focus();
  });

  // afficher immédiatement si la page a déjà le scroll (ex: reload)
  onScroll();
})();

