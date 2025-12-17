import './css/style.css' // Importamos estilos
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

// 1. Configuración Lenis (Smooth Scroll)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Exponer lenis globalmente para usarlo en onclick del HTML si es necesario
window.lenis = lenis;

// 2. Animaciones GSAP (Mismo código que antes, pero modular)
// Hero
const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });
tlHero.from(".reveal-hero", { y: 50, opacity: 0, duration: 1, stagger: 0.2, delay: 0.2 });
gsap.from("#navbar", { y: -100, opacity: 0, duration: 1, delay: 0.8 });

// ScrollTriggers Generales
const sections = [
    { trigger: "#video", target: ".video-card" },
    { trigger: "#problema", target: ".problem-card", stagger: 0.2 },
    { trigger: "#solucion", target: ".step-card", stagger: 0.3 },
    { trigger: "#precios", target: ".price-card", stagger: 0.15 }
];

sections.forEach(sec => {
    gsap.from(sec.target, {
        scrollTrigger: { trigger: sec.trigger, start: "top 75%" },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: sec.stagger || 0,
        ease: "power2.out"
    });
});
