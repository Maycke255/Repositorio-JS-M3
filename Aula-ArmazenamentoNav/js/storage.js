document.getElementById('saveSs').addEventListener('click', function () {
    const inputSession = document.getElementById('storageSession');
    sessionStorage.setItem('info', inputSession.value);

    inputSession.value = '';
});

document.getElementById('readSs').addEventListener('click', function (){
    const infoSs = sessionStorage.getItem('info');
    const infoLength = sessionStorage.length
    alert(`A informacão do session storage é: ${infoSs} e seu tamanho é ${infoLength}`);
    console.log(`A informacão do session storage é: ${infoSs} e seu tamanho é ${infoLength}`);
})

document.getElementById('saveSl').addEventListener('click', function () {
    const inputLocal = document.getElementById('storageLocal');
    localStorage.setItem('name', inputLocal.value);

    inputLocal.value = '';
});

document.getElementById('saveCk').addEventListener('click', function (){
    const coockiesInput = document.getElementById('saveCk');

    const cookie = `info=${coockiesInput.value};`;
    const expiration = `expires=${new Date(2025, 6, 1)};`;
    const path = `path=/;`;

    document.cookie = `${cookie, expiration, path}`
    coockiesInput.value = '';
})