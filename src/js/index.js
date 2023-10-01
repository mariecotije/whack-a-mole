//step 2
const startBtn = document.querySelector('button');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreElement = document.querySelector('.score');
//step 3
let score = 0;
let timeUp = false;
//step 4
const randomTime = (min, max) => {
    let randTime = Math.random();
    return randTime;
};
//step 5
const randomHole = (holes) => {
    let hole
    return hole;
};
//step 6
const peep = (randomTime, randomHole) => {
    hole.classList.toggle = 'active';
    hole.setTimeout(() => {
        hole.classList.toggle = 'active';
    }, 500);
};
//step 7
const whack = () => {
    scoreElement.innerText = `${score}++`;
    
};
//step 8
const hide = () => {
    hole.classList.remove = 'active';
};
//step 9
moles.forEach((mole) => {
    mole.addEventListener('click', (event) => {
        whack();
        hide();
    });
});
//step 10
startBtn.addEventListener('click',(event) => {
    /*reset score and time, start the game, and set the timer.*/
    score = 0;
});