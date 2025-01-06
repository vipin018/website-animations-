document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("h1");

    h1.addEventListener("mouseenter", function() {
        gsap.to(h1, { duration: 0.5, scale: 1.2, color: "#ff0000" });
    });

    h1.addEventListener("mouseleave", function() {
        gsap.to(h1, { duration: 0.5, scale: 1, color: "#ffffff" });
    });
});

