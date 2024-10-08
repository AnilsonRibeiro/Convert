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
const result = document.getElementById ("result")


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

        //Exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        //calcula o total 
        let total = amount * price

        // Verifica se o resultado não é um numero.
        if (isNan(total)) {
            return alert("Por favor, digite o valor corretamente para converter")
        }

        //Formtar o valor total.
        total = formatCurrencyBRL(total).replace("R$", "")

        //Exiber o resultado total.
        result.textContent = `${total} Reais`
        
        
        //Aplica a classe que exibe o footer para mostrar o resultado. 
        footer.classList.add("show-result")

    }catch (error){
        //remover a classe do footer ocultando ele da tela.
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possivel converter.")
    }

}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value){
    // Converte para número para utilizar o toLocalesString para formatar no pradão BRL.
    return Number(value).toLocaleString("pt-BR", {
        style:"currency",
        currency:"BRL"
    })

}
