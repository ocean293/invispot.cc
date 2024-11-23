const h1Continue = document.querySelector('#continue');
const continueText = h1Continue.textContent;
h1Continue.innerHTML = '';
continueText.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    h1Continue.appendChild(span);
});


const h1Invispot = document.querySelector('#invispot');
const invispotText = "invispot.cc";
invispotText.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    h1Invispot.appendChild(span);
});


const links = document.querySelectorAll('#links a');
links.forEach(link => {
    const text = link.textContent;
    link.innerHTML = '';
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        link.appendChild(span);
    });
});


h1Continue.addEventListener('click', () => {
    const gardenAudio = document.getElementById('gardenAudio');
    gardenAudio.play();
    h1Continue.style.display = 'none';
    h1Invispot.style.display = 'block';
    document.getElementById('pfp').style.display = 'block';
    document.getElementById('links').style.display = 'block';
    document.querySelector('.background').style.filter = "blur(5px) brightness(1)";
});
