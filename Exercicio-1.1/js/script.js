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

function addSoccer(){
    const name = document.getElementById(`name`).value;
    const number = document.getElementById(`number`).value;
    const position = document.getElementById(`position`).value;

    if (name === `` || number === `` || position === ``) {
        alert(`Por favor, preencha todos os campos.`);

        document.getElementById(`name`).value = ``;
        document.getElementById(`number`).value = ``;
        document.getElementById(`position`).value = ``;
        return;
    }

    const add = confirm(`Deseja escalar o jogador ${name}, camisa ${number} na posição ${position}?`);

    if (add) {
        const section = document.getElementById(`section-ul`);
        const list = document.getElementById(`soccers`);
        const item = document.createElement(`li`);
        item.id = `positionSoccer-`+number
        item.innerText = `${position} : ${name} - camisa ${number}.`

        list.appendChild(item)
        section.appendChild(list)

        alert(`O jogador foi escalado!`)

        document.getElementById(`name`).value = ``;
        document.getElementById(`number`).value = ``;
        document.getElementById(`position`).value = ``;
        return;
    } else {
        alert(`Operação cancelada...`)

        document.getElementById(`name`).value = ``;
        document.getElementById(`number`).value = ``;
        document.getElementById(`position`).value = ``;
        return;
    }
}

function removeSoccer(){
    
}