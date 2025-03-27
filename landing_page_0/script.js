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
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.fontWeight = "bold";
       link.style.rotate = (Math.random() * 10 ) + 'deg';
        link.style.scale = "1.1";
        link.style.transition = "all 0.3s ease";

    });
    link.addEventListener("mouseleave", () => {
        link.style.fontWeight = "normal";
        link.style.rotate = "0deg";
        link.style.scale = "1";
        link.style.transition = "all 0.3s ease";
    });
});

// let flag = false;
// body.addEventListener("click", () => {
//     if(flag){
//         body.style.backgroundColor = "white";
//         body.style.color = "black";
//         links.forEach(link => {
//             link.style.color = "black";
//         });
//     }else{
//         body.style.backgroundColor = "black";
//         body.style.color = "white";
//         links.forEach(link => {
//             link.style.color = "white";
//         });
//     }
//     flag = !flag;
// });
