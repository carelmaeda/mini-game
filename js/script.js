const player = document.querySelector('.player');
const pipe = document.querySelector('.pipe');


const jump = () => {
    player.classList.add('jump');
    
    setTimeout (() => {
        player.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px','');


    if (pipePosition <= 120 && pipePosition > 0 && playerPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;

        player.src = './imagens/game-over.png';
        player.style.width = '75px';
        player.style.marginLeft = '50px';


        clearInterval(loop);

    }
}
,10);

document.addEventListener('keydown',jump);