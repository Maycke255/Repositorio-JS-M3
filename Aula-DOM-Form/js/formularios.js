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
<<<<<<< HEAD
    document.querySelectorAll(`[name="salad"]:checked`).forEach(function (item) {
        selected += ` - ${item.value}, `
=======
    document.querySelectorAll(`salad:checked`).forEach(function (item) {
        salad += ` = ${item.value}\n`
>>>>>>> 7195ebcff5a3905ecd9598045ddec256cb9be231
    })

    alert(
        name,
        address,
        breadType,
        main,
        selected,
        observations
    )
    console.log({
        name,
        address,
        breadType,
        main,
        selected,
        observations
    })
<<<<<<< HEAD
=======

    console.log({
        name,
        address,
        breadType,
        main,
        selected,
        observations
    })
>>>>>>> 7195ebcff5a3905ecd9598045ddec256cb9be231
}

form.addEventListener(`submit`, eventForm)