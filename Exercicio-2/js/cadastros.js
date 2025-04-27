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

// Array para armazenar os devs
let devs = []

const form = document.getElementById(`formDevs`)

/* Criando algumas funcoes necessarias, funcoes que usariamos mais tarde para criar as variaveis de inputs*/
function createLabel (text, htmlFor) {
    const label = document.createElement(`label`);
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label;
}

function createInput (id, name, type = `text`, value) {
    const input = document.createElement(`input`);
    input.id = id;
    input.name = name;
    input.type = type;
    input.value = value
    return input
}

function addTechnologyforDev (event){
    // Usando essa função especifica, interrompemos o carregamento da pagina, mas o JS funciona do mesmo jeito, a pagina so não carrega
    event.preventDefault();

    // Pegando o nome do usuario
    const name = document.getElementById(`name`).value;
    // Vamos sempre exibir no console para ver se esta funcionando corretamente
    console.log(name);

    /* Usando uma verificação para saber se a mensagem de erro existe, o metodo remove() e um metodo exclusivo do DOM, que remove literalmente o HTML da
    pagina, basta pegarmos o objeto e depois passarmos uma verificação com o remove dentro, e se a verificação fpr true ele remove a linha HTML  */
    function existingMenssageError (){
        const existingMensageError = document.getElementById(`errorMensage`);
        if (existingMensageError) {
            existingMensageError.remove()
        }
    }
    existingMenssageError()

    /* Mensagem de erro, caso o input name esteja vazio  */
    if (name === ``) {
        const groupName = document.getElementById(`groupName`);
        const errorMensage = document.createElement(`div`);
        errorMensage.id = `errorMensage`
        errorMensage.textContent = `Por favor, insira um nome antes de adicionar uma tecnologia, ou cancelar/abortar o cadastro, como o campo nome esta vazio, não
        existe nada para cancelar ou um nome de dev para adicionar uma tecnologia!`;

        groupName.appendChild(errorMensage);
        return;
    }

    const sectionForm = document.getElementById(`sectionForm`);

    // Crriando o formulario onde ficaram os inputs
    const featuresDev = document.createElement(`form`);
    featuresDev.id = `formForFeatures`;

    // Caso o usuario ja esteja cadastrando um usuario, no caso já estiver um nome presente e os botões referente aquele nome, essa mensagem de erro irá aparecer
    const formForFeaturesExisting = document.getElementById(`formForFeatures` )
    if (formForFeaturesExisting) {
        const groupName = document.getElementById(`groupName`);
        const errorMensage = document.createElement(`div`);
        errorMensage.id = `errorMensage`
        errorMensage.textContent = `Você já esta adicionando um candidato, cadaastre ele antes!`;

        groupName.appendChild(errorMensage);
        return;
    }

    // Aqui vamos aproveitar as funcoes que criamos acima, vamos simplesmente chama-las dentro da variavel e definir os paremetros delas de acordo com os das funcoes
    const nameTechLabel = createLabel(`Insira o nome da Tecnologia (JavaScript, Python, Java, Delphi): `, `nameTech`)
    const br1 = document.createElement(`br`)
    const nameTechnology = createInput(`nameTech`, `nameInput`,`text`, null)

    const br2 = document.createElement(`br`);
    const br3 = document.createElement(`br`);

    const yeersLabel1 = createLabel(`0-2 anos`, `years1`)
    const years1 = createInput(`years1`, `years`, `radio`, `0-2 anos`)

    const yeersLabel2 = createLabel(`3-4 anos`, `years2`)
    const years2 = createInput(`years2`, `years`, `radio`, `3-4 anos`)

    const yeersLabel3 = createLabel(`+ de 5 anos`, `years3`)
    const years3 = createInput(`years3`, `years`, `radio`, `+ de 5 anos`)

    // divs para organizar
    const divRadio = document.createElement(`div`);
    divRadio.id = `divRadio`
    const divName = document.createElement(`div`);
    divName.id = `divName`

    // botão de registrar que e reponsavel por registrar as informacões do dev inseridas nos inputs acima
    const registerButton = document.createElement(`button`)
    registerButton.id = `registerButton`
    registerButton.textContent = `REGISTRAR DEV`

    // adicionando os botoes a pagina
    divName.append(nameTechLabel, br1, nameTechnology);
    divRadio.append(years1, yeersLabel1, years2, yeersLabel2, years3, yeersLabel3);
    featuresDev.append(divName, br2, br3, divRadio, registerButton);
    sectionForm.appendChild(featuresDev);

    // criando evento para o obotão de cadastro, esse botão vai ser responsavel por cadastrar todas as informacões em uma lista de devs
    registerButton.addEventListener(`click`, function (event){
        event.preventDefault()

        // chamada da funcão aqui dentro para ver se tem alguma mensagem de erro
        existingMenssageError()

        // Mensagem de erro caso o usuario tente cadastrar um dev sem sua tecnologia, vamos aproveitar e usar essa variavel mais tarde também
        const nameTechnologyValue = document.getElementById(`nameTech`).value
        if (nameTechnologyValue === ``) {
            const divNameMessage = document.getElementById(`divName`);
            const errorMensage = document.createElement(`div`);
            errorMensage.id = `errorMensage`
            errorMensage.textContent = `Por favor, insira a tecnologia em que o dev exerce antes de continuar!`;
    
            divNameMessage.appendChild(errorMensage);
            return;
        }

        /* verificacão caso o usuario tente cadastrar um dev sem marcar sua experiencia com a linguagem, no caso o verificador ! significa negacão ou contradicão,
        pegando a variavel ultilizando o querySelector e verificando se os botões de radio estão checados, no caso, marcados, portanto, caso os botões radio
        NÃO estejam checados a verificacão ocorre. */
        const yearsExperienceValue = document.querySelector(`input[name = "years"]:checked`);
        if (!yearsExperienceValue) {
            const divNameMessage = document.getElementById(`divName`);
            const errorMensage = document.createElement(`div`);
            errorMensage.id = `errorMensage`
            errorMensage.textContent = `Por favor, selecione a experiencia que o candidato tem com sua tecnologia!`;
    
            divNameMessage.appendChild(errorMensage);
            return;
        }

        // Agora sim, pegamos o VALUE dos radios que estão marcados
        const yearsExperienceValueChecked = document.querySelector(`input[name = "years"]:checked`).value;

        // Por fim, fazemos o que o botão realmente foi desginado a fazer, enviar os valores para a array de devs como objeto
        devs.push({
                name: name, 
                technology: nameTechnologyValue, 
                experience: yearsExperienceValueChecked
            });

        console.log(devs)

        updateListAfterRegistration();
    });
}

// Funcão para remover a lista completa dos devs
function  updateListAfterRegistration() {
        // Funcão para remover o botão caso ele já exista na tela
        const buttonExisting = document.getElementById(`removeListBtn`)
        if (buttonExisting) {
            buttonExisting.remove()
        }

        const devsSection = document.getElementById(`devsSection`)
        const separator = document.createElement(`div`)
        separator.id = `separator`

        const removeListBtn = document.createElement(`button`)
        removeListBtn.id = `removeListBtn`
        removeListBtn.textContent = `LIMPAR LISTA DE CANDIDATOS`

        separator.appendChild(removeListBtn)
        devsSection.appendChild(separator)

        updateDevsList()

            // Remove o formulário de features
        document.getElementById(`formForFeatures`).remove()

        // Adiciona o evento de remoção apenas uma vez
        removeListBtn.addEventListener(`click`, removeList)
    }

    function removeList(event) {
        event.preventDefault();
    
        // Funcão para remover o botão assim que a mensagem de erro abaixo aparecer
        function removeListBtn() {
            const removeListBtn = document.getElementById(`removeListBtn`)
            if (removeListBtn) {
                removeListBtn.remove()
            }
        }
        removeListBtn()
        
        const separator = document.getElementById('separator');
        separator.innerHTML = 'Confirma a exclusão de toda a lista de devs? Ao clicar em "SIM" a ação não poderá ser refeita!';
    
        const div = document.createElement('div');

        const confirmOK = document.createElement('button');
        confirmOK.id = 'confirmOK';
        confirmOK.textContent = 'SIM';
    
        const cancel = document.createElement('button');
        cancel.id = 'cancel';
        cancel.textContent = 'CANCELAR';
    
        div.append(confirmOK, cancel);
        separator.appendChild(div);
    
        // Função para confirmar a exclusão
        confirmOK.addEventListener(`click`, function(){
            // Recria a array devs com a array vazia
            devs = [];
            // Limpa a sessão onde esta presenta a ul lista dos devs
            const devsSection = document.getElementById('devsSection');
            devsSection.innerHTML = '';
            updateDevsList(); // Recria a lista vazia
            // Remove o elemento da lista completamente
        });
        
        //Funcão para cancelar a exclusão, caso ele clique em cancelar, essa funcão irá criar o botão novamente, e como se desse a impressão de voltar para a acão anterior
        cancel.addEventListener(`click`, function () {                
            separator.innerHTML = ''; // Limpa o HTML presente na div do botão
            //Recria todo o botão e adiciona a mesma funcão
            const newRemoveBtn = document.createElement('button'); 
            newRemoveBtn.id = 'removeListBtn';
            newRemoveBtn.textContent = 'LIMPAR LISTA DE CANDIDATOS';
            newRemoveBtn.addEventListener('click', removeList);
            separator.appendChild(newRemoveBtn);
        }); 
    }

    // Funcao para adicionar a lista a tela
    function updateDevsList(){
        // Verifica se a lista já existe, se não, cria
        let devsList = document.getElementById('devsList');
        if (!devsList) {
            devsList = document.createElement('ul');
            devsList.id = 'devsList';
            document.getElementById('devsSection').appendChild(devsList);
        }
        
        // Limpa a lista antes de recriar
        devsList.innerHTML = '';

        // Remove o botão de limpar lista se não houver devs
        if (devs.length === 0) {
            const separator = document.getElementById('separator');
            if (separator){
                separator.remove();
            }
            return;
        }
        
            // Adiciona cada dev à lista
            devs.forEach(function (dev, i) {
                const devRegister = document.createElement('li');
                devRegister.name = 'itemList';
                devRegister.textContent = `Nome do Dev: ${dev.name} - Tecnologia: ${dev.technology} - Experiência: ${dev.experience}.`;
        
                // Adicionando o botão de remover a linha cadastrada, para cada dev cadastrado na lista, por exemplo, caso o usuario queira excluir somente aquele dev com aquela tecnologia especifica
                const removeLeadLine = document.createElement('button');
                removeLeadLine.id = 'removeLeadLine';
                removeLeadLine.textContent = 'REMOVER ESTE CADASTRO';
                // ------------------------------------------------- PAREI AQUI
                removeLeadLine.setAttribute('data-index', i);
        
                devRegister.appendChild(removeLeadLine);
                devsList.appendChild(devRegister);
        
                removeLeadLine.addEventListener('click', function (event) {
                    event.preventDefault();
                    devs.splice(i, 1);
                    updateDevsList()

                    if (devs.length === 0) {
                        const separator = document.getElementById('separator');
                        if (separator) separator.remove();
                        return;
                    }
                });
            });
        
            // Limpa os campos do formulário
            document.getElementById('name').value = '';
    }

/* Função para cancelar um cadastro quando estiver digitando um nome, ela cancela toda a ação  */
function abortRegistration (){
    const name = document.getElementById(`name`).value;

    function existingMenssageError (){
        const existingMensageError = document.getElementById(`errorMensage`);
        if (existingMensageError) {
            existingMensageError.remove()
        }
    }
    existingMenssageError()

    // Verificação para um erro, caso o nome esteja vazio, ou não exista campos de inputs para o cadastro, essa mensagem aparece e a função acima a remove
    if (name === ``) {
        const groupName = document.getElementById(`groupName`);
        const errorMensage = document.createElement(`div`);
        errorMensage.id = `errorMensage`
        errorMensage.textContent = `Para cancelar/abortar um cadastro de um candidato e necessario colocar seu nome e clicar em adicionar uma tecnologia, no momento
        o campo do nome do dev esta vazio, então não há o que cancelar.`;

        groupName.appendChild(errorMensage);
        return;
    }

    // apaga o campo name e remove toda a sessão de cadastro
    const sectionToRemove = document.getElementById(`formForFeatures`);
    if (sectionToRemove) {
        sectionToRemove.remove()
    }
    document.getElementById(`name`).value = ``;
}

// Botão de registrar
form.addEventListener(`reset`, abortRegistration);

//Botão de cadastrar um dev e aparecer os inputs de cadastro
form.addEventListener(`submit`, addTechnologyforDev);