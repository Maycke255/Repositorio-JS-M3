const darkBtn = document.querySelector('#darkBtn');
const lightBtn = document.querySelector('#lightBtn');
const textElement = document.querySelector('.text');

function useDarkTheme(event) {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    textElement.classList.add('green-color-text');
}

function useLightTheme(event) {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    textElement.classList.remove('green-color-text');
}

darkBtn.addEventListener('click', useDarkTheme);
lightBtn.addEventListener('click', useLightTheme);

console.log("Script carregado!"); // Verificação
