/* Podemos enviar os proprios valores do DOM para o JS de forma mais especifica, como acessar o proprio elemento que esta sendo executado, ultilizando o elemento
"this", que representa o proprio elemento selecionado no HTML, nesse caso estamos exibindo o buttun. Podemos exibir também o nó pai representante daquela função especifica, 
podemos fazer isso ultilizando o "parentNode", ele vai acessar todo o elemento que esse button esta atrelaçado, nesse caso ele esta exibindo toda a section */

/* Dessa forma estamos coletando informações inseridas em um formulario no DOM de forma mais pratica, ultilizamos o "element" que o proprio nó pai como descrito acima,
depois acessamos o seu filho, o "children", e depois acessamos esse children pelo seu ID e pegamos seu valor */
function register (element){
    const name = element.children.inputnName.value
    const password = element.children.inputPassword.value
    const passwordConfirmation = element.children.passowordConfirmationInput.value

    if (password === passwordConfirmation) {
        console.log(name, password, passwordConfirmation)
    } else {
        alert(`As senhas não conferem`)
    }
}

// Trabalhando com eventos
/* Podemos adicionar eventos dinamicamente ultilizando o Javascript, sem inserir codigos no html como sempre fazemos que e ultilizar um evento "onclick, change, blur
etc", mas dessa vez passamos apenas um ID para o button que queremos usar o evento, primeiro capturamos esse id, depois apenas passamos uma metodo chamado
"addEventListener", esse metodo permite adicionar eventos que normalmente adicionamos no HTML, depois passamos o vento que queremos e em seguida uma função callBack
que e uma função que chama ela mesma, resumindo: assim que o button for clicado, a função vai executar tal ato.

Em seguida adicionamos uma função register2, no caso sempre que criamos um metodo addEventListener, esse objeto e disparado, ele e responsavel por informar todas as
caracteristicas do evento selecionado, um evento possui diferentes caracteristicas, ela serve como segundo parametro do evento, e deve ser usada como callBack, ou seja
priemiro criamos uma função e passamos um parametro para ela e depois exibimos o proprio parametro, assim exibimos todas as caracteriscas do evento, apos isso, criamos
uma variavel para acessar o evento (O parâmetro ev receberá o objeto Event criado automaticamente), depois acessamos o alvo desse botão que e o elemento que tem o listener 
(também o botão) e por fim o parentNode, que e todo aquele nó pai onde esta o botão e os elementos.

Apos isso tudo, acessamos os valores digitados pelo usuario em cada input, fazemos isso usando a variavel que criamos que acessa todo o conteudo externo antes e o botão,
depois acessamos um filho desse nó pai assim como foi feito na função de cima, depois acessamos o input pelo seu id.*/

/* exemplo pratico:
[Usuário clica no botão]
    ↓
[Browser cria objeto Event]
    ↓
[Chama register2(ev)]
    ↓
[Dentro de register2]:
    - ev.target = botão
    - ev.currentTarget = botão
    - ev.type = 'click'
    ↓
[Função executa sua lógica]
    ↓
[Objeto Event é descartado] */

const button = document.getElementById(`registerButton`)

function register2 (ev){
    // 1. 'ev' é o objeto de evento recebido automaticamente
    console.log(ev) // Mostra todas as propriedades do evento

    // 2. Acessando o elemento pai do botão clicado
    const sectionElement = ev.currentTarget.parentNode
    const name = sectionElement.children.nameRegister.value
    const password = sectionElement.children.passwordRegister.value
    const passwordConfirmation = sectionElement.children.passowordregisterConfirmation.value

    if (password === passwordConfirmation) {
        alert(`Usuario ${name} cadastrado!`)
    } else {
        alert(`Operação cancelada`)
    }
}

// Adicionando o listener de clique ao botão
button.addEventListener(`click`, register2)