// const pregunta = parseInt(prompt('Elige un numero del 1 al 100'));

// for (let i = 1; i <= pregunta; i++) {
//     if(i % 5 === 0 && i % 3 === 0) {
//         console.log(`${i} - FizzBuzz`)
//     } else if(i % 5 === 0) {
//         console.log(`${i} - buzz`)
//     } else if (i % 3 === 0) {
//         console.log(`${i} - Fizz`)
//     }
// }

const move = ['piedra', 'papel', 'tijera'];

let playerSelection = prompt('Elige, piedra, papel, o tijera!');
const div = document.querySelector('div');

const botonpiedra = document.querySelector('.piedra');



const computerSelection = computerPlay();

function computerPlay() {
    return move[Math.floor(Math.random() * 3)];
}

function mostrarResultado1() {
    const h2 = document.createElement('h2');
    h2.textContent = 'Ganaste!, Felicidads!'

    div.appendChild(h2)
}

function mostrarResultado2() {
    const h2 = document.createElement('h2');
    h2.textContent = 'Perdiste contra la maquina, mal ahí!';

    div.appendChild(h2);
}

function playRound(playerSelection, computerSelection) {
    if(
        (playerSelection === 'piedra' && computerSelection === 'tijera') ||
        (playerSelection === 'tijera' && computerSelection === 'papel') ||
        (playerSelection === 'papel' && computerSelection === 'piedra')) {
            return mostrarResultado1();
        }

    if(
        (computerSelection === 'piedra' && playerSelection === 'tijera') ||
        (computerSelection === 'tijera' && playerSelection === 'papel') ||
        (computerSelection === 'papel' && playerSelection === 'piedra')) {
                return mostrarResultado2()
    }
    
    
}

function game() {
    console.log(playRound(playerSelection, computerSelection));
}

game();
