/*  */
const form = document.getElementById(`orderForm`)

function eventForm (element){
    // Previne o comportamento padrão de enviar o formulário
    element.preventDefault()
    const name = document.querySelector(`name`).value
    const address = document.querySelector(`address`).value
    const breadType = document.querySelector(`breadType`).value
    const main = document.querySelector(`main`).value
    const observations = document.querySelector(`observations`).value

    let selected = ``;
    document.querySelectorAll(`salad:checked`).forEach(function (item) {
        salad += ` = ${item.value}\n`
    })(

    alert({
        name,
        address,
        breadType,
        main,
        selected,
        observations
    })
    )
}

form.addEventListener(`submit`, eventForm)