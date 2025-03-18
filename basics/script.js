const tl = gsap.timeline();

// tl.to("#box1", {
//     duration: 1,
//     x: 1000,
//     ease: "power2.inOut",
// });

// tl.from("#box2", {
//     duration: 1,
//     x: 1000,
//     ease: "power2.inOut",
// });

// tl.fromTo("#box3", {
//     duration: 1,
//     x: 0,
//     ease: "power2.inOut",
// }, {
//     x: 1000,
//     rotation: 360,
//     ease: "power2.inOut",
// });

tl.from("nav", {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power2.inOut",
});

tl.from("h2", {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power2.inOut",
});

tl.from("nav ul a", {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power2.inOut",
    stagger: 0.2,
});

tl.from(".text", {
    duration: 1,
    scale: 0,
    opacity: 0,
    // y: -20,
    ease: "power2.inOut",
});
