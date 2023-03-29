const bloody = document.querySelector('.bloody');
const evil = document.querySelector('.evil');
const fairy = document.querySelector('.fairy');
const bee = document.querySelector('.bee');
const stock = document.querySelector('.stock');

const body = document.querySelector('body');
const totalArea = document.querySelector('.total-area');
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