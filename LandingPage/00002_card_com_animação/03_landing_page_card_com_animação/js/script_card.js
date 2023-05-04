const card1 = document.getElementById('card-game-1')
const card2 = document.getElementById('card-game-2')
const game1 = document.getElementById('game-1')
const game2 = document.getElementById('game-2')
const setaDireita1 = document.getElementById('direita-1')
const setaEsquerda1 = document.getElementById('esquerda-1')

setaEsquerda1.addEventListener('click', () =>{
    card1.style.left = '9999px';
    game1.style.left = '9999px';
    card2.style.left = '-50px';
    game2.style.left = '-50px';
})
setaDireita1.addEventListener('click', () =>{
    card1.style.left = '-50px';
    game1.style.left = '-50px';
    card2.style.left = '-9999px';
    game2.style.left = '-9999px'; 
})