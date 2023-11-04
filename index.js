const cat = document.querySelector('.cat');
const planet = document.querySelector('.planet')

const jump = () =>{
    cat.classList.add('jump');

    setTimeout(() => {
        cat.classList.remove('jump');
    }, 600)
}
const loop = setInterval (() => {

    const planetPosition = planet.offsetLeft
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px', '');

    if (planetPosition <=120 && planetPosition > 0 && catPosition < 80) {

        planet.style.animation = 'none';
        planet.style.left = `${planetPosition}px`;

        cat.style.animation = 'none';
        cat.style.bottom = `${catPosition}px`;

        cat.src = './imagens/game-over.png';
        cat.style.width = '105px';
        cat.style.marginLeft = '75px'

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump)
