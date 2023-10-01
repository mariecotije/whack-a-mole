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
    let randTime = Math.floor((Math.random() * (max - min + 1)) + min);
    return randTime;
};
//step 5
const randomHole = (holes) => {
    const randH = Math.floor(Math.random() * (holes.length));
    const hole = holes[randH];
    return hole;
};
//step 6
const peep = () => {
    hole = randomHole(holes);
    hole.classList.toggle('active');

    setTimeout(() => {
        hide();
    }, randomTime(3000, 6000));
};
//step 7
const whack = () => {
    score++;
    scoreElement.innerText = `${score}`;

};
//step 8
const hide = () => {
    hole.classList.remove('active');
};
//step 9
moles.forEach((mole) => {
    mole.addEventListener('click', (event) => {
        whack();
        hide();
    });
});
//step 10
startBtn.addEventListener('click', (event) => {
    /*reset score and time, start the game, and set the timer.*/
    score = 0;
    scoreElement.innerText = `${score}`
    let timeUp = false;
    let timer = 0;
    const moleInterval = setInterval(() => {
        peep();
        timer++;
        if (timer == 20) {
            alert("Time is up! Click START to begin again.")
            timeUp = true;
            clearInterval(moleInterval)
        }
    }, randomTime(2000, 5000));
});