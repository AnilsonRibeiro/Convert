const amount = document.getElementById("amount")


// Manipulando o input amount para receber somente numero.
amount.addEventListener("input", () =>{
    
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex,"")
})