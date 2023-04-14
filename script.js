const bloody = document.querySelector('.bloody');
const evil = document.querySelector('.evil');
const fairy = document.querySelector('.fairy');
const bee = document.querySelector('.bee');
const dark = document.querySelector('.dark');
const stock = document.querySelector('.stock');

const body = document.querySelector('body');
const totalArea = document.querySelector('.total-area');

// Seleciona tabuleiro
const board = document.querySelector('.board'); 

// Seleciona as coordenadas do tabuleiro
const coord = document.querySelector('.coord');

// Loop para adicionar linhas até que tenham 8
for (let i = 0; i < 8; i++) {

    const row = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('td');
        // Verifica se a  soma dos índices da linha e coluna é par
        if ((i+j) % 2 === 0) {
            cell.classList.add('square-black'); 
        } else {
            cell.classList.add('square');
        }
        row.appendChild(cell);
    }
    board.appendChild(row);

}

// Seletores dos elementos criados via loop
const square = document.querySelector('.square');
const squares = document.querySelectorAll('.square');
const buttons = document.querySelectorAll('.button');