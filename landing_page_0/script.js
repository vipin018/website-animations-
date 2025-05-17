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



// Imp variables
const initialPoints = {x: 0, y: 0}
const movedPoints = {x: 0, y: 0}
const smoothMouse = {x: 0, y: 0}
const cursorVelocity = {x: 0, y: 0}
const lerp = (x, y, a) => x * (1 - a) + y * a;
const randomUrl = gsap.utils.random([
   'https://images.unsplash.com/photo-1664250990825-45046e22b351?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1673545174610-78273eac993f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1623577284502-d65cdc6ba0b6?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1727341553976-8456538f2009?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1674045692313-433f7b439bf2?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1731589815827-3447e9d51466?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1587958035263-adb9b85001ec?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
], true)



// Calling f(x)
window.addEventListener('mousemove', (event) => handleMouseMove(event))
gsap.ticker.add(() => tick())





// Imp f(x)
function handleMouseMove({x, y}) {
   initialPoints.x = x
   initialPoints.y = y


   const distance = Math.sqrt(
      Math.pow((movedPoints.x - initialPoints.x), 2) +
      Math.pow((movedPoints.y - initialPoints.y), 2)
   )

   if(distance > 100) {
      const img = new Image()
      img.src = randomUrl()
   
      gsap.set(img, {
         height: 80,
         width: 80,
         position: 'absolute',
         top: initialPoints.y,
         left: initialPoints.x,
         xPercent: -50, // x: '-50%'
         yPercent: -50,
         pointerEvents: 'none',
         willChange: 'transform',
      })

      gsap.timeline()
         .from(img, {
            scale: 0,
            duration: 0.1
         })
         .from(img, {
            rotation: -cursorVelocity.x * 0.1,
            x: -cursorVelocity.x,
            y: -cursorVelocity.y,
         }, '<')
         .to(img, {
            scale: 0,
            opacity: 0,
            ease: 'back.in',
            onComplete: () => img.remove()
         }, '-=0.2')
   
      document.body.appendChild(img)
   
   
   
      movedPoints.x = initialPoints.x
      movedPoints.y = initialPoints.y
   }
}

function tick() {
   smoothMouse.x = lerp(smoothMouse.x, initialPoints.x, 0.2)
   smoothMouse.y = lerp(smoothMouse.y, initialPoints.y, 0.2)
   
   cursorVelocity.x = initialPoints.x - smoothMouse.x
   cursorVelocity.y = initialPoints.y - smoothMouse.y
}






/* Under dev */