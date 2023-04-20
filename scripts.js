const displayNumAnterior = document.querySelector('.valorAnterior');
const displayNumActual = document.querySelector('.valorActual');
const operadores = document.querySelectorAll('.operator');
const numeros = document.querySelectorAll('.number');
const borrar = document.querySelector('#delete');
const borrarTodo = document.querySelector('#clearAll');

const display = new Display(displayNumAnterior, displayNumActual);

numeros.forEach(boton => {
    boton.addEventListener('click', () => display.addNumber(boton.innerHTML))
})

borrar.addEventListener('click', () => display.deleteNumber())

borrarTodo.addEventListener('click', () => display.clearAll())

operadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})