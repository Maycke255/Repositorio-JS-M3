/* Para adicionar elementos ou modificar elementos usando o JS, usamos a propriedade classList, ela retorna uma lista de classes de CSS, o JS tem acesso
a todas as classes que definimos no CSS, então basta adiciona-las aqui pelo seu nome, usamos o add para adicionar e o remove para remover a classe de
um elemento */

const darkBtn = document.querySelector('#darkBtn');
const lightBtn = document.querySelector('#lightBtn');
const textElement = document.querySelector('.text');

function useDarkTheme() {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    textElement.classList.add('green-color-text');
}

function useLightTheme() {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    textElement.classList.remove('green-color-text');
}

darkBtn.addEventListener('click', useDarkTheme);
lightBtn.addEventListener('click', useLightTheme);

console.log("Script carregado!"); // Verificação

/* Já os atributos data- no JS, são usados para armazenar valores diretamente no conteudo do HTML, podemos usar data-id, data-username, data-ativo, etc. O
nome data- no começo e obrigatorio, usamos esses atributos para guardar valores, ex: data-idade: '20'.*/
/* Também existe o getAttribute e o setAttribute, mas são bem diferentes do data-, Exemplos:
dataset | setAttribute/getAttribute
Sintaxe: Acessa como propriedade (camelCase)| Usa strings diretamente (kebab-case)
Formato do nome: data-nome-vira → dataset.nomeVira | Mantém o nome original (data-nome-vira)
Uso para outros atributos: Apenas atributos data-* | Qualquer atributo HTML (id, class, data-*, etc.).

No caso o getAttribute serve para OBTER os atributos, já o setAttribute serve para SETAR/DEFINIR atributos, uma notavel e importante diferença que já expliquei
e que o dataset, serve apenas para atributos data-, se tentarmos acessar um id, class, tag, etc com o data- não vai dar certo. O getAttribute pode alterar
diretamente o funcionamento do elemento, podemos alterar dinamicamente o elemento de varias formas*/

const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = 'Olá mundo'

    console.log(input.value)
    // Obtendo o elemento
    console.log(input.getAttribute('value'))
})
// Mudando o type de um input
document.getElementById('type').addEventListener('click', function () {
    input.setAttribute('type', 'radio')

    // Adicionando dataset
    input.dataset.novoValor = 'Esse e o valor dataset'
    console.log(input.dataset.novoValor) /* no dataset- usamos kebab-case, ou seja as palavras são separadas por "-", mas no JS usamos camelCase, mas o
    dataset transforma esses valores automaticamente em kebab, nesse exemplo: novoValor vai ficar assim -> data-novo-valor */
})

document.getElementById('placeholder').addEventListener('click', function (){
    input.setAttribute('placeholder', 'Digite algo...')
    const placeholder = input.dataset.placeholder = 'Digite algo...'

    console.log(input.getAttribute('placeholder'))
    console.log(placeholder)
})

// Podemos também usar atributos booleanos como o disabled
document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', input.disabled)
})

// Alterando o valor data
document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse
    console.log(`O valor do dataset e: ${data}`)
})