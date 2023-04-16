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
            cell.classList.add('square'); 
        } else {
            cell.classList.add('square-black');
        }
        row.appendChild(cell);
    }
    board.appendChild(row);

}

// Seletores dos elementos criados via loop
const square = document.querySelector('.square');
const squares = document.querySelectorAll('.square');
const buttons = document.querySelectorAll('.button');

// Percorre cada botão e adiciona um listener click
buttons.forEach(function(button) {
    button.addEventListener('click', () => {

        // Remove a classe active de todos os botões
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });

        // Adiciona a classe active no botão clicado
        button.classList.add('active');

        // Define os estilos com base no botão clicado
        switch (button.classList[1]) {
            case 'bloody':
                body.style.background = 'url(img/bg01-verm.png)';
                totalArea.style.boxShadow = 'var(--shadow-bloody)';
                totalArea.style.background = 'var(--bg-bloody)';
                squares.forEach(function(square) {
                    square.style.opacity = '0';
                    setTimeout(() => {
                    square.style.background = 'var(--cor-bloody)';
                    square.style.opacity = '1';
                    }, 200);
                });
                break;
            case 'evil':
                body.style.background = 'url(img/bg01-rox.png)';
                totalArea.style.boxShadow = 'var(--shadow-evil)';
                totalArea.style.background = 'var(--bg-evil)';
                squares.forEach(function(square) {
                    square.style.opacity = '0';
                    setTimeout(() => {
                    square.style.background = 'var(--cor-evil)';
                    square.style.opacity = '1';
                    }, 200);
                });
                break;
            case 'fairy':
                body.style.background = 'url(img/bg01-verd.png)';
                totalArea.style.boxShadow = 'var(--shadow-fairy)';
                totalArea.style.background = 'var(--bg-fairy)';
                squares.forEach(function(square) {
                    square.style.opacity = '0';
                    setTimeout(() => {
                    square.style.background = 'var(--cor-fairy)';
                    square.style.opacity = '1';
                    }, 200);
                });
                break;
            case 'bee':
                body.style.background = 'url(img/bg01-amar.png)';
                totalArea.style.boxShadow = 'var(--shadow-bee)';
                totalArea.style.background = 'var(--bg-bee)';
                squares.forEach(function(square) {
                    square.style.opacity = '0';
                    setTimeout(() => {
                    square.style.background = 'var(--cor-bee)';
                    square.style.opacity = '1';
                    }, 200);
                });
                break;
            case 'dark':
                body.style.background = 'url(img/bg01-dark.png)';
                totalArea.style.boxShadow = 'var(--shadow-dark)';
                totalArea.style.background = 'var(--bg-dark)';
                squares.forEach(function(square) {
                    square.style.opacity = '0';
                    setTimeout(() => {
                    square.style.background = 'var(--cor-dark)';
                    square.style.opacity = '1';
                    }, 200);
                });
                break;
            case 'stock':
                body.style.background = 'url(img/bg01.jpg)';
                totalArea.style.boxShadow = 'var(--shadow-stock)';
                totalArea.style.background = 'var(--bg-stock)';
                squares.forEach(function(square) {
                    square.style.opacity = '0';
                    setTimeout(() => {
                    square.style.background = 'var(--cor-stock)';
                    square.style.opacity = '1';
                    }, 200);
                });
                break;
                default:
                break;
        }
    })
});

// Inicia com o botão Stock ativado
stock.classList.add('active');

// Adicionando as peças
const pieces = {
    'rook': '&#9820;',
    'knight': '&#9822;',
    'bishop': '&#9821;',
    'queen': '&#9819;',
    'king': '&#9818;',
    'pawn': '&#9823;'
}

// Adiciona as peças pretas
board.rows[0].cells[0].innerHTML = pieces.rook;
board.rows[0].cells[1].innerHTML = pieces.knight;
board.rows[0].cells[2].innerHTML = pieces.bishop;
board.rows[0].cells[3].innerHTML = pieces.queen;
board.rows[0].cells[4].innerHTML = pieces.king;
board.rows[0].cells[5].innerHTML = pieces.bishop;
board.rows[0].cells[6].innerHTML = pieces.knight;
board.rows[0].cells[7].innerHTML = pieces.rook;

for (let i = 0; i < 8; i++) {
board.rows[1].cells[i].innerHTML = pieces.pawn;
}

// Adiciona as peças brancas
board.rows[7].cells[0].innerHTML = pieces.rook;
board.rows[7].cells[1].innerHTML = pieces.knight;
board.rows[7].cells[2].innerHTML = pieces.bishop;
board.rows[7].cells[3].innerHTML = pieces.queen;
board.rows[7].cells[4].innerHTML = pieces.king;
board.rows[7].cells[5].innerHTML = pieces.bishop;
board.rows[7].cells[6].innerHTML = pieces.knight;
board.rows[7].cells[7].innerHTML = pieces.rook;

for (let i = 0; i < 8; i++) {
board.rows[6].cells[i].innerHTML = pieces.pawn;
}

// Define as classes das peças
const blackPieces = document.querySelectorAll('tr:nth-child(1) td, tr:nth-child(2) td');
const whitePieces = document.querySelectorAll('tr:nth-child(7) td, tr:nth-child(8) td');
blackPieces.forEach(piece => {
piece.classList.add('black-piece');
});
whitePieces.forEach(piece => {
piece.classList.add('white-piece');
});

// Toca efeitos sonoros
const audio01 = new Audio("aud/sound01.mp3");
const audio02 = new Audio("aud/sound02.mp3");

const tocar02 = () => {
    audio02.play();
}

buttons.forEach(button => {
    
    // Toca efeitos sonoros
    button.addEventListener('click', tocar02);
    
});