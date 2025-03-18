let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

// Cursor follow effect
main.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5,
        ease: "circ.out",
    });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "👀";
    
    gsap.to(cursor, {
        scale: 5,
        backgroundColor: "transparent",
        duration: 0.5,
        ease: "power2.out",
    });
}); 


imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    cursor.style.color = "#ffffff";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#ffffff",
    });
});
