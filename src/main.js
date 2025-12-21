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
const heroSection = document.querySelector('section'); // First section is Hero

if (heroTitle && heroSection) {
    gsap.to(heroTitle, {
        scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 150, // Parallax effect
        // Removed opacity: 0 to keep it visible
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

// 5. Testimonials Marquee
const marqueeContainer = document.querySelector('.marquee-container');
if (marqueeContainer) {
    // Clone items for seamless loop
    const items = marqueeContainer.innerHTML;
    marqueeContainer.innerHTML += items + items; // Triple content for safety

    gsap.to(marqueeContainer, {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "none"
    });
}