const animation = () => {
    const tl = gsap.timeline();
  
    // Hero title animation with a spring effect
    tl.from(".hero h1", {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "bounce.out",
      stagger: 0.25,
    });
  
    // Stacking effect for image
    tl.from(".hero img", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.3,
    }, "+=0.5"); // Delayed to come after the text
  
    // Get initial position of the image
    const img = document.querySelector(".hero img");
    const initialX = img.offsetLeft;
    const initialY = img.offsetTop;
  
    // Make the image draggable with elastic return effect
    Draggable.create(".hero img", {
      type: "x,y",
      edgeResistance: 0.7,
      bounds: "body",
      inertia: true,
      onDragEnd: function () {
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        });
      }
    });
  }
  
  animation();
  


let links = document.querySelectorAll(".nav-links a");
let body = document.querySelector("main");
const letter = new SplitType('.nav-links a', { types: 'chars' });
  
// Minimal and modern hover effect
letter.chars.forEach((char) => {
  char.addEventListener('mouseenter', () => {
    gsap.to(char, {
      scale: 1.2,
      y: -5,
      fontWeight: 'bold',
      color: '#000',
      duration: 0.3,
      ease: 'power2.out',
      rotate: Math.random() * 10,
    });
  });

  char.addEventListener('mouseleave', () => {
    gsap.to(char, {
      scale: 1,
      y: 0,
      color: '#000',
      duration: 0.3,
      ease: 'power2.out',
      fontWeight: 'normal',
      rotate: 0,
    });
  });
});



