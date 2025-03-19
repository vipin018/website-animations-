function splitText() {
    let h1 = document.querySelector("#main h1");
    let h1Text = h1.textContent;

    let words = h1Text.split(""); // this will split the text into an array of characters 
    // it will split based on the space between the words not the characters but if we want to split based on the characters we can use the split("") method
    // for example if we have a text "Hello World" and we want to split it into an array of characters we can use the split("") method like this: let words = h1Text.split("");

    let clutter = "";

    words.forEach(function (word) {
        clutter += `<span>${word}</span>`;
    })

    h1.innerHTML = clutter;
}

splitText();

gsap.from("h1 span", {
    scale: 2,
    y: 200,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: "h1",
        start: "top 100%",
        scrub: 2,
        markers: true,
        pin: false,
        pinSpacing: false,
        // markers: true,
        snap: 1,
    },
});

