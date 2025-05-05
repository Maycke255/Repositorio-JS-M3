const main = document.querySelector(`main`)
// Pegando o root do CSS
const root = document.querySelector(`:root`)
// Coletando o input desabilitado
const resultInput = document.getElementById(`result`)
// Coletando o ID do input onde irão aparecer os numeros e caracteres a serem ultilizados nas operacões
const input = document.getElementById(`input`)
// Agora vamos armazenar as teclas HABILITAVEIS para serem digitadas, no caso, alem dessas teclas presentes no array, não poderá ser digitado mais nada além delas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// Funcão para que somente as teclas do arr ay sejam clicadas e selecionadas pelo teclado
document.querySelectorAll(`.charKey`).forEach(function (charKeyBtns){
    charKeyBtns.addEventListener(`click`, function(){
        /* Pegamos a informacão dataset presente em cada botão, que representa nada mais nada menos que o valor em si que aquele botão representa, e em seguida
        reatribuimos o valor digitado no input ao dataset, agora o valor digitado pelo botão e o valor do dataset */
        const value = charKeyBtns.dataset.value
        input.value += value
    })
})

// Agora vamos definir uma funcão para o botão clear, que e para limpar o campo de input
document.getElementById(`clear`).addEventListener(`click`, function () {
    // Apenas colocamos uma string vazia no input e depois focamos o input, no caso apos ser limpado ele e selecionado
    input.value = ``

    if (resultInput.value = `ERROR`) {
        resultInput.value = ``
        resultInput.classList.remove(`error`)
    }

    input.focus()
})

// Agora vamos criar as verificacões para que o backspace, no caso a tecla de apagar funcione e o enter, e uma verificacão caso o usuario digite algo que não esta na array
// A funcão keydown que vamos usar como acionamento, refere se a quando o botão for clicado, ou pressionado pelo usuario
input.addEventListener(`keydown`, function (ev){
    ev.preventDefault()

    /* A primeira verificacão serve para ver, se a tecla que o usuario digitou esta presente no array allowedkeys, para isso usamos o metodo de array includes, que serve
    para verificar se tal expressão se faz inclusa dentro do array, caso esteja, ela retorna true, caso não, false.
    No caso a "key" na verificacão refere se a tecla fisica pressionada pelo usuario, por fim, caso a tecla pressionada se faca presente, ela vai concatenar o valor do input 
    a tecla, ou seja, se tornariam uma so*/
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return;
    }

    // Caso a tecla de apagar for clicada, ela vai apagar um value do input ate o penultimo
    if (ev.key === `Backspace`) {
        input.value = input.value.slice(0, -1)
    }

    // Verificacão para caso enter for clicado, caso enter for clicado ele vai chamar a funcão calculate que faz a operacão
    if (ev.key === `Enter`) {
        calculate()
    }
})

document.getElementById(`equal`).addEventListener(`click`, calculate)

function calculate() {
    /* Definimos por padrão que ao clicar no calculate, o botão irá mostrar uma mensagem de ERROR, no caso se não tiver nada para ser executado no input, e mesmo assim o
    usuario tente clicar em calcular, essa mensagem irá aparecer, ou então previnimos também o comportamento do eval de carregar algum codigo malicioso caso o usuario
    digite algum, afinal, caso ele digite, vai dar um monte de erro no console, então com essa mensagem "ERROR", escrita dessa forma, o eval entende que aquilo e um erro,
    então ele não executa o codigo. */
    resultInput.value = `ERROR`
    resultInput.classList.add(`error`)

    /* Essa e a parte de calcular, no caso iremos ultilizar a propriedade "eval", essa proprieade avalia as strings, numeros ou caracteres digitados pelo usuario,
    no caso ela transforma os caracteres digitados pelo usuario em codigos javaScript, ela roda os caracteres ainda por cima, essa propriedade e muito perigosa, e deve
    ser usada com muito cautela e cuidado, afinal, caso o usuario digite algum codigo malicioso dentro do input, vai estar valendo, por que essa propriedade irá avaliar
    o que o usuario digitou e ver se e valido como JS, caso seja ela vai rodar.
    Em seguida, atribuimos o value do input desabilitado que fica embaixo ao result da operacão que o usuario fez.
    Por fim, removemos também a class do error, caso contrario vai ficar vermelhão */
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove(`error`)
}

/* Função para copiar o valor presente no input de resultado, e simples, primeiro pegamos a ação do botão, no caso o currentTarget, que e responsavel por armazenar o evento
do botão ao ser clicado, caso seja clicado a verificação irá mudar o texto para Copied e adicionar uma classe para destacar o botão, sem seguida o mais importante, usamos uma
função propria, uma função nativa já implementada no navegador, a clipboard, depois adicionamos um "writeText", que significa escrever texto, o que queremos escrever? O value
do resultInput, então escrevemos o value para a area de transferencia, depois ao clicar novamente, voltamos o texto Copy e retiramos a class. */
document.getElementById(`copyToClipboard`).addEventListener(`click`, function (ev) {
    const button = ev.currentTarget
    
    if (button.innerText === `Copy`) {
        button.innerText = `Copied!`
        button.classList.add(`success`)
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = `Copy`
        button.classList.remove(`success`)
    }
})

/* Por fim, acessamos o botão de trocar de tema, definimos uma verificação para o main da pagina, no caso a pagina esteja no tema dark, ela vai trocar pro tema light
e virse e evrsa */
document.getElementById(`themeSwitcher`).addEventListener(`click`, function () {
    if (main.dataset.theme === `dark`) {
        root.style.setProperty(`--bg-color`, `#f1f5f9`)
        root.style.setProperty(`--border-color`, `#aaa`)
        root.style.setProperty(`--font-color`, `#212529`)
        root.style.setProperty(`--primary-color`, `#26834a`)
        main.dataset.theme = `light`
    } else {
        root.style.setProperty(`--bg-color`, `#212529`)
        root.style.setProperty(`--border-color`, `#666`)
        root.style.setProperty(`--font-color`, `#f1f5f9`)
        root.style.setProperty(`--primary-color`, `#4dff91`)
        main.dataset.theme = `dark`
    }
})