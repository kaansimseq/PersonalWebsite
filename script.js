const QUOTE = "AI Won't Take Your Job. Someone Using AI Will.";

const hero = document.getElementById("hero");
const scrollCue = document.getElementById("scrollCue");
const cardsLayer = document.getElementById("cardsLayer");
const cardsLabel = document.getElementById("cardsLabel");
const cardsTrackWrap = document.getElementById("cardsTrackWrap");
const cardsTrack = document.getElementById("cardsTrack");
const quoteLayer = document.getElementById("quoteLayer");
const quoteText = document.getElementById("quoteText");
const progressBar = document.getElementById("progressBar");

function seg(p, a, b) {
  return Math.max(0, Math.min(1, (p - a) / (b - a)));
}

function trackWidth() {
  // Measured from the DOM so the scroll math stays correct across the
  // mobile breakpoint, where card size/gap shrink.
  return cardsTrack.scrollWidth;
}

function update() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const p = max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
  const vw = window.innerWidth;

  const heroOut = seg(p, 0.05, 0.15);
  hero.style.opacity = 1 - heroOut;
  hero.style.transform = `translateY(${-50 * heroOut}px) scale(${
    1 - 0.08 * heroOut
  })`;

  scrollCue.style.opacity = 1 - seg(p, 0.005, 0.045);

  const cp = seg(p, 0.1, 0.68);
  const travel = vw + trackWidth();
  cardsTrackWrap.style.transform = `translateX(${-cp * travel}px)`;

  const fadeOut = seg(p, 0.66, 0.71);
  cardsLayer.style.opacity = 1 - fadeOut;
  cardsLayer.style.pointerEvents = fadeOut < 0.5 ? "auto" : "none";
  cardsLabel.style.opacity = seg(p, 0.08, 0.14);

  const quoteActive = p > 0.71;
  quoteLayer.classList.toggle("active", quoteActive);
  quoteLayer.style.opacity = seg(p, 0.71, 0.75);
  const q = seg(p, 0.74, 0.94);
  quoteText.textContent = QUOTE.slice(0, Math.round(q * QUOTE.length));

  progressBar.style.width = (p * 100).toFixed(2) + "%";
}

window.addEventListener("scroll", update, { passive: true });
window.addEventListener("resize", update);
update();
