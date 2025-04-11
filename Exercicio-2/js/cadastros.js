/* Cadastro de Devs
-O-
Construa uma página web que permita cadastrar desenvolvedores,
suas tecnologias e tempos de experiência.

- A página deve ter um input para o nome completo do
desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no
formulário uma nova linha de inputs contendo:
- um campo de texto para o nome da tecnologia
- um grupo de botões tipo "radio" com opções de tempo de
experiência (por exemplo, "0-2 anos", "3-4 anos" e "5+ anos")
- um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva
as informações do dev em um array e limpa o formulário. Para testar
o funcionamento você pode utilizar um simples console.log0

Para esse exercício você deve utilizar apenas eventos adicionados via
javascript e a página deve funcionar sem acionar um recarregamento. */

let devs = []

const form = document.getElementById(`formDevs`)

function addTechnologyforDev (event){
    // Usando essa função especifica, interrompemos o carregamento da pagina, mas o JS funciona do mesmo jeito, a pagina so não carrega
    event.preventDefault();

    // Pegando o nome do usuario
    const name = document.getElementById(`name`).value;
    // Vamos sempre exibir no console para ver se esta funcionando corretamente
    console.log(name);

    if (name === ``) {
        const groupName = document.getElementById(`groupName`);
        const createVerification = document.createElement(`p`);
        createVerification.id = `alertName`
        createVerification.innerText = `Por favor, insira um nome antes de adicionar uma tecnologia`;

        name.focus()
        return;
    }
}

form.addEventListener(`submit`, addTechnologyforDev);