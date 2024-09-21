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

    console.log(currency.value)
}