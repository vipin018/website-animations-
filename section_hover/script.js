let elem = document.querySelectorAll('.elem');

elem.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        // elem.style.backgroundColor = 'yellow';
        elem.querySelector('img').style.opacity = 1;
       
    })
})

elem.forEach(elem => {
    elem.addEventListener('mouseleave', () => {
        elem.querySelector('img').style.opacity = 0;
    })
})

elem.forEach(elem => {
    elem.addEventListener('mousemove', (e) => {
        elem.querySelector('img').style.left = `${e.clientX}px`;
        elem.querySelector('img').style.top = `${e.clientY}px`;
      
    })
})
