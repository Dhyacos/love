const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
    heart.addEventListener('mouseover', () => {
        heart.classList.add('animate');
    });

    heart.addEventListener('mouseout', () => {
        heart.classList.remove('animate');
    });
});

function createHeart() {
    const heart = document.createElement('img');
    heart.src = 'src/assets/hearts.svg';
    heart.classList.add('heart');
    heart.style.position = 'absolute';
    heart.style.width = '50px';
    heart.style.height = '50px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);

    const size = 30 + Math.random() * 40; // tamanho entre 30px e 70px
heart.style.width = size + 'px';
heart.style.height = size + 'px';
}

setInterval(createHeart, 700);

