const againBtnEl = document.querySelector('.again-btn');
const betweenEl = document.querySelector('.between');
const titleEl = document.querySelector('.title');
const NumberEl = document.querySelector('.Number');
const GuessEl = document.querySelector('.Guess-input');
const btnCheckEl = document.querySelector('.btn-check');
const massageEl = document.querySelector('.massage');
const labelScoreEl = document.querySelector('.label-score');
const scoreEl = document.querySelector('.score');
const labelHighScoreEl = document.querySelector('.label-highscore');
const HighScoreEl = document.querySelector('.Highscore');
const bodyEl = document.querySelector('body');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
// تعداد کلیک های زده شد ه
var score = 10;
var HighScore = 0
const btnHandler = () => {
    // ساخا متغیر برای تبدیل به اعداد
    const Guess = Number(GuessEl.value);
    console.log(Guess);
    /// اگه شماره نبوداینو لاگ بزن
    if (!Guess) {
        console.log('No number');
        //اگه بود اینو لاگ بزن 
    } else { console.log(typeof Guess); }
//اگه تعدا شماره و رندوم شماره برابر بود اینو لاگ بزن 
    if (randomNumber === Guess) {
        console.log(GuessEl.value);
        //تبدیل خط اول به خوب خوب 
        massageEl.textContent = 'good good';
        //تبدیل پس زمینه کل به سبز
        bodyEl.style.backgroundColor = 'green';
        GuessEl.style.backgroundColor = '#5eff00';
        NumberEl.style.backgroundColor = '#00ff33';
        
        HighScoreEl.textContent = score 
        NumberEl.textContent = randomNumber

    } else if (randomNumber > Guess && score > 0) {
        massageEl.textContent = 'Too low';
        score--;
        scoreEl.textContent = score;
        

    } else if (randomNumber < Guess && score > 0) {

        massageEl.textContent = 'Too High';
        score--;
        scoreEl.textContent = score;
        
    }if (score ==0){
        massageEl.textContent = 'Game over';
        bodyEl.style.backgroundColor = '#7c0000'
    }


}


const restBtnHandler = () => {
    NumberEl.textContent = '?';
    massageEl.textContent = 'start quessing...';
    score = 10
    scoreEl.textContent= '10';
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNumber);
    //خالی شدن تکست اریا 
    GuessEl.value = '';
    bodyEl.style.backgroundColor = '#413c3c';
    NumberEl.style.backgroundColor = '#4c4848';
    GuessEl.style.backgroundColor = '#484444';
    console.log('restart game');
    HighScoreEl.textContent = score;
    

};



againBtnEl.addEventListener('click', restBtnHandler);

btnCheckEl.addEventListener('click', btnHandler);
