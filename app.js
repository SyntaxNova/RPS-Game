let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const uscore = document.querySelector('#user-score');
const cscore = document.querySelector('#computer-score');


const drawgame = () => {
    msg.innerText = "its Draw";
    msg.style.backgroundColor = 'grey' ;
}

const showwinner = (userwin , userchoice , compchoice) => {
    if(userwin){
        userscore++;
        uscore.innerText = userscore;
        msg.innerText = `You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = 'green' ;
    }else{
        compscore++;
        cscore.innerText = compscore;
        msg.innerText = `You Loose.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = 'red' ;
    }
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === 'rock') {
            userwin = compchoice === 'paper' ? false : true;
        } else if (userchoice === 'paper') {
            userwin = compchoice === 'scissors' ? false : true;
        } else {
            userwin = compchoice === 'rock' ? false : true;
        }
        showwinner(userwin , userchoice , compchoice);
    }
}

const gencompchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randidx = Math.floor(Math.random() * 3);
    // Generating random numbers
    return options[randidx];
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
        console.log('choice', userchoice);
        playgame(userchoice);
    })
})