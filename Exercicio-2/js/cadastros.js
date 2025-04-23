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
    function existingMenssageError (){
        const existingMensageError = document.getElementById(`errorMensage`);
        if (existingMensageError) {
            existingMensageError.remove()
        }
    }
    existingMenssageError()

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

    const featuresDev = document.createElement(`form`);
    featuresDev.id = `formForFeatures`;

    const formForFeaturesExisting = document.getElementById(`formForFeatures` )
    if (formForFeaturesExisting) {
        const groupName = document.getElementById(`groupName`);
        const errorMensage = document.createElement(`div`);
        errorMensage.id = `errorMensage`
        errorMensage.textContent = `Você já esta adicionando um candidato, cadaastre ele antes!`;

        groupName.appendChild(errorMensage);
        return;
    }

    const nameTechnologyLabel = document.createElement(`label`);
    nameTechnologyLabel.htmlFor = `nameTechnology`;
    nameTechnologyLabel.innerText = `Insira o nome da Tecnologia (JavaScript, Python, Java, Delphi): `
    const br1 = document.createElement(`br`)
    const nameTechnology = document.createElement(`input`);
    nameTechnology.type = `text`;
    nameTechnology.id = `nameTechnology`;

    const br2 = document.createElement(`br`);
    const br3 = document.createElement(`br`);

    const yeersLabel1 = document.createElement(`label`);
    yeersLabel1.htmlFor = `years1`
    yeersLabel1.textContent = `0-2 anos`
    const years1 = document.createElement(`input`);
    years1.type = `radio`
    years1.id = `years1`
    years1.name = `years`
    years1.value = `0-2 anos`

    const yeersLabel2 = document.createElement(`label`);
    yeersLabel2.htmlFor = `years2`
    yeersLabel2.textContent = `3-4 anos`
    const years2 = document.createElement(`input`);
    years2.type = `radio`
    years2.id = `years2`
    years2.name = `years`
    years2.value = `3-4 anos`

    const yeersLabel3 = document.createElement(`label`);
    yeersLabel3.htmlFor = `years3`
    yeersLabel3.textContent = `+ de 5 anos`
    const years3 = document.createElement(`input`);
    years3.type = `radio`
    years3.id = `years3`
    years3.name = `years`
    years3.value = `+ de 5 anos`

    const divRadio = document.createElement(`div`);
    divRadio.id = `divRadio`
    const divName = document.createElement(`div`);
    divName.id = `divName`

    const registerButton = document.createElement(`button`)
    registerButton.id = `registerButton`
    registerButton.textContent = `REGISTRAR DEV`

    divName.append(nameTechnologyLabel, br1, nameTechnology);
    divRadio.append(years1, yeersLabel1, years2, yeersLabel2, years3, yeersLabel3);
    featuresDev.append(divName, br2, br3, divRadio, registerButton);
    sectionForm.appendChild(featuresDev);

    registerButton.addEventListener(`click`, function (event){
        event.preventDefault()

        existingMenssageError()

        // Coletando os valores digitados pelo usuario
        const nameTechnologyValue = document.getElementById(`nameTechnology`).value
        if (nameTechnologyValue === ``) {
            const divNameMessage = document.getElementById(`divName`);
            const errorMensage = document.createElement(`div`);
            errorMensage.id = `errorMensage`
            errorMensage.textContent = `Por favor, insira a tecnologia em que o dev exerce antes de continuar!`;
    
            divNameMessage.appendChild(errorMensage);
            return;
        }

        const yearsExperienceValue = document.querySelector(`input[name = "years"]:checked`);
        if (!yearsExperienceValue) {
            const divNameMessage = document.getElementById(`divName`);
            const errorMensage = document.createElement(`div`);
            errorMensage.id = `errorMensage`
            errorMensage.textContent = `Por favor, selecione a experiencia que o candidato tem com sua tecnologia!`;
    
            divNameMessage.appendChild(errorMensage);
            return;
        }

        let yearsExperienceValueChecked = document.querySelector(`input[name = "years"]:checked`).value;

        devs.push({
                name: name, 
                technology: nameTechnologyValue, 
                experience: yearsExperienceValueChecked
            });

        console.log(devs)

        updateUIAfterRegistration();
    });
}

function  updateUIAfterRegistration() {
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
            if (separator) separator.remove();
            return;
        }
        
            // Adiciona cada dev à lista
            devs.forEach(function (dev, i) {
                const devRegister = document.createElement('li');
                devRegister.name = 'itemList';
                devRegister.textContent = `Nome do Dev: ${dev.name} - Tecnologia: ${dev.technology} - Experiência: ${dev.experience}.`;
        
                const removeLeadLine = document.createElement('button');
                removeLeadLine.id = 'removeLeadLine';
                removeLeadLine.textContent = 'REMOVER ESTE CADASTRO';
                removeLeadLine.setAttribute('data-index', i);
        
                devRegister.appendChild(removeLeadLine);
                devsList.appendChild(devRegister);
        
                removeLeadLine.addEventListener('click', function (event) {
                    event.preventDefault();
                    devs.splice(i, 1);
                    updateDevsList()
                });
            });
        
            // Limpa os campos do formulário
            document.getElementById('name').value = '';
    }


        function removeList(event) {
            event.preventDefault();
        
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
                devs = [];
                const devsSection = document.getElementById('devsSection');
                devsSection.innerHTML = '';
                updateDevsList(); // Recria a lista vazia
                // Remove o elemento da lista completamente
            });
            
            cancel.addEventListener(`click`, function () {                separator.innerHTML = '';
                const newRemoveBtn = document.createElement('button');
                newRemoveBtn.id = 'removeListBtn';
                newRemoveBtn.textContent = 'LIMPAR LISTA DE CANDIDATOS';
                newRemoveBtn.addEventListener('click', removeList);
                separator.appendChild(newRemoveBtn);
            }); 
        }

    /* Função para remover ou cancelar um cadastro  */
function abortRegistration (){
    const name = document.getElementById(`name`).value;

    function existingMenssageError (){
        const existingMensageError = document.getElementById(`errorMensage`);
        if (existingMensageError) {
            existingMensageError.remove()
        }
    }
    existingMenssageError()

    if (name === ``) {
        const groupName = document.getElementById(`groupName`);
        const errorMensage = document.createElement(`div`);
        errorMensage.id = `errorMensage`
        errorMensage.textContent = `Para cancelar/abortar um cadastro de um candidato e necessario colocar seu nome e clicar em adicionar uma tecnologia, no momento
        o campo do nome do dev esta vazio, então não há o que cancelar.`;

        groupName.appendChild(errorMensage);
        return;
    }

    const sectionToRemove = document.getElementById(`formForFeatures`);
    if (sectionToRemove) {
        sectionToRemove.remove()
    }
    document.getElementById(`name`).value = ``;
}

form.addEventListener(`reset`, abortRegistration);

form.addEventListener(`submit`, addTechnologyforDev);