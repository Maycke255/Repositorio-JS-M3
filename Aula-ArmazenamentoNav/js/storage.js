/* Storage Session e o armazenamento de sessão, e o armazenamento presente apenas naquela pagina atual, ela fica armazenada
apenas na pagina em que você esta, caso feche a aba que esta ou saia do navegador, os dados somem */
document.getElementById('saveSs').addEventListener('click', function () {
    const inputSession = document.getElementById('storageSession');
    //podemos acessar atravez do objeto do navegador window, ou diretamente com o nome
    //definimos o primeiro nome que e a chave, depois o conteudo da chave, ex: key = e-mail, value = aa@gmail.com.
    sessionStorage.setItem('info', inputSession.value);

    inputSession.value = '';
});

document.getElementById('readSs').addEventListener('click', function (){
    const infoSs = sessionStorage.getItem('info');
    const infoLength = sessionStorage.length
    alert(`A informacão do session storage é: ${infoSs} e seu tamanho é ${infoLength}`);
    console.log(`A informacão do session storage é: ${infoSs} e seu tamanho é ${infoLength}`);
})

/* Local Storage e aquele que armazena o conteudo enquanto o usuario ou a propria aplicação JS apague, ela fica disponivel 
no historico do navegador, e ideal para salvar algo por um bom tempo mas que seja temporario */
document.getElementById('saveSl').addEventListener('click', function () {
    const inputLocal = document.getElementById('storageLocal');
    localStorage.setItem('name', inputLocal.value);

    inputLocal.value = '';
});

document.getElementById('readSl').addEventListener('click', function () {
    const readLocal = localStorage.getItem('name');
    const localLength = localStorage.length

    alert(`A informacão do session storage é: ${readLocal} e seu tamanho é ${localLength}`);
    console.log(`A informacão do session storage é: ${readLocal} e seu tamanho é ${localLength}`);
})

/* Os cookies so podem ser alterados manualmente ou pelo back end, são mais usado no back pois tem muitas outras configura-
ções e caracteristicas que podem ser inclusas, como data de expiração que e a validade desses cookies, ou caminhos onde são
acessados*/
document.getElementById('saveCk').addEventListener('click', function (){
    const coockiesInput = document.getElementById('cookies');

    const cookie = `info=${coockiesInput.value};`;
    const expiration = `expires=${new Date(2025, 6, 1)};`;
    const path = `path=/;`;

    document.cookie = cookie + expiration + path
    coockiesInput.value = '';
})

document.getElementById('readCk').addEventListener('click', function () {
    const read = document.cookie;

    console.log(read)
    alert(read)
})