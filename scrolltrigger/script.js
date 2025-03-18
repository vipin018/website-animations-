


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
        // markers: true,
        scrub: 5,
        
    },
});

gsap.to("#page3 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 0%",
        end: "top -200%",
        markers: true,
        scrub: 5,
        pin:true,
    }
})
