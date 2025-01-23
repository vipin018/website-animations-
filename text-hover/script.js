const enhance = id => {
    const element = document.getElementById('link');
    Text = element.innerText.split('');
    element.innerText = '';
    Text.forEach(letter => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = letter;
        element.appendChild(span);
    });
}
enhance('link');