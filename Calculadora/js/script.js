const main = document.getElementById(`main`)
// Pegando o root do CSS
const root = document.getElementById(`:root`)
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
    /* Essa e a parte de calcular, no caso iremos ultilizar a propriedade "eval", essa proprieade avalia as strings, numeros ou caracteres digitados pelo usuario,
    no caso ela transforma os caracteres digitados pelo usuario em codigos javaScript, ela roda os caracteres ainda por cima, essa propriedade e muito perigosa, e deve
    ser usada com muito cautela e cuidado, afinal, caso o usuario digite algum codigo malicioso dentro do input, vai estar valendo, por que essa propriedade irá avaliar
    o que o usuario digitou e ver se e valido como JS, caso seja ela vai rodar.
    Em seguida, atribuimos o value do input desabilitado que fica embaixo ao result da operacão que o usuario fez */
    const result = eval(input.value)
    resultInput.value = result
}