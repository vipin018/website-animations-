document.querySelector('h1').onmouseover = event => {
    let iteration = 0;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split('').map((letter, index) => {
            if (index <= iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 24)];
        }).join('');
        iteration += 1/3;
        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

    }, 50);
    
}