// Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

// - Escalar um jogador
// - Informar a posição do jogador a ser escalado para o time.
// - Informar o nome do jogador.
// - Informar o número da camisa do jogador.
// - Ter um botão "Escalar" que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e
// então insere as informações em uma lista na página.
// - Após o jogador ser escalado os campos de texto devem ser limpos.
// - Remover um jogador
// - Informar o número da camisa do jogador.
// - Ter um botão "Remover" que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e
// então exclui ele da lista na página.
// - Após o jogador ser removido o campo de texto deve ser limpo.

// Dica: lembrando que é possível acessar o texto de um input através da propriedade value.

let jogadores = []

function exibirJogadores() {
    const section = document.getElementById(`section-pai`);
    const lista = document.createElement(`ul`)

    if (jogadores.length === 0){
        section.innerText = `Nenhum Jogador adicionado`;
        return;
    }

    jogadores.forEach(function (element){
        const item = document.createElement(`li`)
        item.textContent = `Nome: ${element.nome}, Posição: ${element.posicao}, Camisa: ${element.camisa}`

        lista.appendChild(item);
        section.appendChild(lista)
    });

}

function addJogador () {
    const nome = document.getElementById(`nome`).value;
    const posicao = document.getElementById(`posicao`).value;
    const camisa = document.getElementById(`camisa`).value;

    if (nome === `` || posicao === `` || camisa === ``) {
        alert(`Por favor, preencha os campos para adicionar um jogador`);
        return;
    }

    let confirmPrompt = confirm(`Deseja adicionar escalar o jogador ${nome}, na posição ${posicao}, com a camisa ${camisa}?`);
    
    if (confirmPrompt) {
        const jogadorConfirmado = {
            nome,
            posicao,
            camisa
        }

        jogadores.push(jogadorConfirmado);

        exibirJogadores();

        document.getElementById(`nome`).value = ``;
        document.getElementById(`posicao`).value = ``;
        document.getElementById(`camisa`).value = ``;
    } else {
        alert(`Operação cancelada...`)
        return;
    }
}

function removerJogador() {
    let removeInput = document.getElementById(`numero-camisa`).value;

    if (removeInput === ``) {
        alert(`Por favor, escale um jogador antes para poder remover`);
        return;
    };

    let remove = jogadores.findIndex(function (element){
        return element.camisa === removeInput
    });

    if (remove === -1) {
        alert(`Número da camisa não encontrado.`);
        return;
    }

    const nomeJogador = jogadores[remove].nome;

    let removeConfirm = confirm(`Deseja remover o jogador ${nomeJogador} da camisa ${removeInput}?`);

    if (removeConfirm) {
        jogadores.splice(remove, 1);
        exibirJogadores()

        document.getElementById(`numero-camisa`).value = ``;
    }
}