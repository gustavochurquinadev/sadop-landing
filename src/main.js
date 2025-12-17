import './css/style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);

// 1. Smooth Scroll Setup with Lenis
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

// 2. Parallax Hero Effect
const heroTitle = document.querySelector('h1');
if (heroTitle) {
    gsap.to(heroTitle, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: 200, // Move text down slower than scroll
        opacity: 0
    });
}

// 3. Reveal Animations (Hero)
const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

tl.to(".reveal-hero", {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    delay: 0.5
});

// 4. Feature Cards Reveal
const cards = document.querySelectorAll('.feature-card');
cards.forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});