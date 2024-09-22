//Cotação das moedas
const USD = 5.52
const EUR = 6.16
const GBP = 7.34




//Obetendo os elementos do formulario.

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById ("description")


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
    try{
        description.textContent = `${symbol} 1 = ${price}`
        
        
        
        //Aplica a classe que exibe o footer para mostrar o resultado. 
        footer.classList.add("show-result")

    }catch (error){
        //remover a classe do footer ocultando ele da tela.
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possivel converter.")
    }

}

