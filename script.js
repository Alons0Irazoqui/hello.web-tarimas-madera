document.documentElement.classList.add("js");

const PHONE_WA = "525641225210";

document.body.classList.add("loading");

const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  window.setTimeout(() => {
    loader?.classList.add("is-hidden");
    document.body.classList.remove("loading");
  }, 650);
});

const nav = document.getElementById("nav");
const ham = document.getElementById("ham");
const mob = document.getElementById("mob");

const setNavState = () => {
  nav?.classList.toggle("scrolled", window.scrollY > 18);
};

window.addEventListener("scroll", setNavState, { passive: true });
setNavState();

ham?.addEventListener("click", () => {
  const isOpen = ham.classList.toggle("is-open");
  ham.setAttribute("aria-expanded", String(isOpen));
  nav?.classList.toggle("open", isOpen);
  mob?.classList.toggle("is-open", isOpen);
});

mob?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    ham?.classList.remove("is-open");
    ham?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("open");
    mob.classList.remove("is-open");
  });
});

const phrases = [
  "tarimas recicladas",
  "compra de pallets usados",
  "reparacion y restauracion",
  "fabricacion bajo pedido",
  "mayoreo para empresas"
];

const twText = document.getElementById("twText");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

const type = () => {
  if (!twText) return;

  const phrase = phrases[phraseIndex];
  twText.textContent = phrase.slice(0, charIndex);

  if (!deleting && charIndex < phrase.length) {
    charIndex += 1;
    window.setTimeout(type, 52);
    return;
  }

  if (!deleting && charIndex === phrase.length) {
    deleting = true;
    window.setTimeout(type, 1250);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    window.setTimeout(type, 28);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % phrases.length;
  window.setTimeout(type, 280);
};

type();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: "0px 0px -60px" });

document.querySelectorAll(".rev").forEach((el) => revealObserver.observe(el));

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const target = Number(el.dataset.count || el.dataset.heroCount || 0);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const duration = 950;
    const started = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll("[data-count], [data-hero-count]").forEach((el) => {
  countObserver.observe(el);
});

const makeParticles = (canvasId, color = "201,166,107") => {
  const canvas = document.getElementById(canvasId);
  if (!(canvas instanceof HTMLCanvasElement)) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];
  let raf = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(70, Math.max(24, Math.floor(width / 22)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.24,
      vy: (Math.random() - 0.5) * 0.2,
      a: Math.random() * 0.22 + 0.06
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -5) p.x = width + 5;
      if (p.x > width + 5) p.x = -5;
      if (p.y < -5) p.y = height + 5;
      if (p.y > height + 5) p.y = -5;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${p.a})`;
      ctx.fill();
    });
    raf = requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
  return () => cancelAnimationFrame(raf);
};

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  makeParticles("pcanvas", "201,166,107");
  makeParticles("pcanvasWhy", "63,125,88");
  makeParticles("pcanvasGaleria", "201,166,107");
}

const form = document.getElementById("cForm");
form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("nombre") || "").trim();
  const phone = String(data.get("telefono") || "").trim();
  const service = String(data.get("servicio") || "").trim();
  const message = String(data.get("mensaje") || "").trim();

  const required = [
    form.querySelector("#fn"),
    form.querySelector("#ft"),
    form.querySelector("#fs")
  ].filter(Boolean);

  let isValid = true;
  required.forEach((field) => {
    const empty = !field.value.trim();
    field.classList.toggle("is-invalid", empty);
    if (empty) isValid = false;
  });

  if (!isValid) return;

  const text = [
    "Hola, me interesa cotizar con EcoTarimas MX.",
    `Nombre: ${name}`,
    `Telefono: ${phone}`,
    `Servicio: ${service}`,
    message ? `Detalle: ${message}` : ""
  ].filter(Boolean).join("\n");

  window.open(`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});
