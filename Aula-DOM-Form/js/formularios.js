/*  */
const form = document.getElementById(`orderForm`)

function eventForm (element){
    // Previne o comportamento padrão de enviar o formulário
    element.preventDefault()
    const name = document.querySelector(`[name="name"]`).value
    const address = document.querySelector(`[name="address"]`).value
    const breadType = document.querySelector(`[name="breadType"]`).value
    const main = document.querySelector(`[name="main"]`).value
    const observations = document.querySelector(`[name="observations"]`).value

    let selected = ``;
    document.querySelectorAll(`[name="salad"]:checked`).forEach(function (item) {
        selected += ` - ${item.value}, `})
        
    console.log({
        name,
        address,
        breadType,
        main,
        selected,
        observations
    })
}

form.addEventListener(`submit`, eventForm)