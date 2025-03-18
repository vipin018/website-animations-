


gsap.to("#page2 #box", {
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.8,
    duration: 2,
    ease: "power2.inOut",
    // scale: 1.5,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        start: "top 90%",
        end: "bottom 100%",
        markers: true,
        scrub: 5,
        
    },
});