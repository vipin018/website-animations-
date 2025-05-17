import { gsap } from "gsap";
import SplitType from "split-type";

const split = new SplitType("#app", {
  types: "lines, words, chars",
  charClass: "char"
});

document.querySelectorAll("#app p").forEach((char) => {
  char.addEventListener("click", () => {
    gsap.from(split.chars, {
      yPercent: "random([-100, 100])",
      rotation: "random([-180, 180])",
      skewX: "random([-20, 20])",
      scale: "random([0.5, 1.5])",
      ease: "back.out(1.7)",
      filter: "blur(10px)",
      opacity: 0,
      autoAlpha: 0,
      stagger: {
    amount: 0.2,
    axis: "x",
    from: "random",
    ease: "back.out(1.7)",
    
  },
  duration: 0.8,
});

  })
})

const btn = document.querySelector("button");

btn.addEventListener("mouseenter", () => {
  gsap.to(btn, {
    backgroundColor: "#343434",
    color: "#fff",
    duration: 0.3,
    ease: "power1.inOut",
  });
})

btn.addEventListener("mouseleave", () => {
  gsap.to(btn, {
    backgroundColor: "white",
    color: "#343434",
    duration: 0.3,
    ease: "power1.inOut",
  });
})