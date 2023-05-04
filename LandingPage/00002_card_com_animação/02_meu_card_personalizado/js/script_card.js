const card1 = document.getElementById('card-game-1')
const card2 = document.getElementById('card-game-2')
const game1 = document.getElementById('game-1')
const game2 = document.getElementById('game-2')
const setaDireita1 = document.getElementById('direita-1')
const setaEsquerda1 = document.getElementById('esquerda-1')

setaEsquerda1.addEventListener('click', () =>{
    card1.style.left = '650px';
    game1.style.left = '650px';
    card2.style.left = '-50px';
    game2.style.left = '-50px';
})
setaDireita1.addEventListener('click', () =>{
    card1.style.left = '-50px';
    game1.style.left = '-50px';
    card2.style.left = '-650px';
    game2.style.left = '-650px'; 
})

const card3 = document.getElementById('card-game-3')
const card4 = document.getElementById('card-game-4')
const game3 = document.getElementById('game-3')
const game4 = document.getElementById('game-4')
const setaDireita2 = document.getElementById('direita-2')
const setaEsquerda2 = document.getElementById('esquerda-2')

setaEsquerda2.addEventListener('click', () =>{
    card3.style.left = '650px';
    game3.style.left = '650px';
    card4.style.left = '-50px';
    game4.style.left = '-50px';
})
setaDireita2.addEventListener('click', () =>{
    card3.style.left = '-50px';
    game3.style.left = '-50px';
    card4.style.left = '-650px';
    game4.style.left = '-650px'; 
})