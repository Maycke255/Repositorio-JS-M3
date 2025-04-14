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

    /* Usando uma verificação para saber se a mensagem de erro existe, o metodo remove() e um metodo exclusivo do DOM, que remove literalmente o HTML da
    pagina, basta pegarmos o objeto e depois passarmos uma verificação com o remove dentro, e se a verificação fpr true ele remove a linha HTML  */
    const existingMensageError = document.getElementById(`errorMensage`);
    if (existingMensageError) {
        existingMensageError.remove()
    }

    if (name === ``) {
        const groupName = document.getElementById(`groupName`);
        const errorMensage = document.createElement(`div`);
        errorMensage.id = `errorMensage`
        errorMensage.textContent = `Por favor, insira um nome antes de adicionar uma tecnologia`;

        groupName.appendChild(errorMensage);
        return;
    }

    const sectionForm = document.getElementById(`sectionForm`);

    const featuresDev = document.createElement(`form`);
    featuresDev.id = `formForFeatures`;

    const nameTechnologyLabel = document.createElement(`label`);
    nameTechnologyLabel.htmlFor = `nameTechnology`;
    nameTechnologyLabel.innerText = `Insira o nome da Tecnologia (JavaScript, Python, Java, Delphi): `
    const br1 = document.createElement(`br`)
    const nameTechnology = document.createElement(`input`);
    nameTechnology.type = `text`;
    nameTechnology.id = `nameTechnology`;
    const br2 = document.createElement(`br`);
    const br3 = document.createElement(`br`);

    const years1 = document.createElement(`input`);
    years1.type = `radio`
    years1.id = `years1`
    years1.value = `0-2 anos`

    const years2 = document.createElement(`input`);
    years2.type = `radio`
    years2.id = `years2`
    years2.value = `3-4 anos`

    const years3 = document.createElement(`input`);
    years3.type = `radio`
    years3.id = `years3`
    years3.value = `+ de 5 anos`

    featuresDev.append(nameTechnologyLabel,br1, nameTechnology, br2, br3, years1, years2, years3);
    sectionForm.appendChild(featuresDev);
}

form.addEventListener(`submit`, addTechnologyforDev);