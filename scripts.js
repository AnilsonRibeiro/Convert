//Cotação das moedas
const USD = 5.52
const EUR = 6.16
const GBP = 7.34




//Obetendo os elementos do formulario.

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")


// Manipulando o input amount para receber somente numero.

amount.addEventListener("input", () =>{
    
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex,"")
})

// capturando o evento de submit(enviar) do formulario.

form.onsubmit =(event) =>{
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break;
    
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break;

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }

}

//função para converter a moeda.

function convertCurrency (amount, price, symbol){
    console.log(amount, price, symbol)

}

