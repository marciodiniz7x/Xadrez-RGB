
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

// Loop para adicionar linhas até que tenham 8
for (let i = 0; i < 8; i++) {

    // Cria o elemento de linha de acordo com o loop
    const row = document.createElement('tr');

    // Loop para adicionar 8 celulas em cada linha
    for (let j = 0; j < 8; j++) {

        // Cria o elemento de celula
        const cell = document.createElement('td');

        // Verifica se a  soma dos índices da linha e coluna é par
        if ((i+j) % 2 === 0) {
            // Par cria uma quadrado preto
            cell.classList.add('square-black'); 
        } else {
            // Ímpar criar um quadrado
            cell.classList.add('square');
        }

        // Adiciona a célua criada na linha atual
        row.appendChild(cell);

    }

    // Adiciona a linha atual na tabela
    board.appendChild(row);

}

// Seletores dos elementos criados via loop
const square = document.querySelector('.square');
const squares = document.querySelectorAll('.square');

bloody.addEventListener('click', function() {

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
    
});

evil.addEventListener('click', function() {

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

});

fairy.addEventListener('click', function() {

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

});

bee.addEventListener('click', function() {

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

});

dark.addEventListener('click', function() {

    body.style.background = 'url(img/bg01.jpg)';
    totalArea.style.boxShadow = 'var(--shadow-dark)';
    totalArea.style.background = 'var(--bg-dark)';
    squares.forEach(function(square) {
        square.style.opacity = '0';
        setTimeout(() => {
            square.style.background = 'var(--cor-dark)';
            square.style.opacity = '1';
        }, 200);
    });

});

stock.addEventListener('click', function() {

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

});