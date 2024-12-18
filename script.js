//Cotação de moedas
const dol = 6.25
const libra = 7.9
const euro = 6.5



const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")
const footer = document.querySelector  ("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
    const regex = /\D+/g
    amount.value = amount.value.replace(regex, "")//mudei o valor de amount. agora ele só aceita números
})

form.addEventListener ("submit", (e) => {
e.preventDefault()

switch(currency.value) {
    case "USD":
        convert(amount.value, dol, "US$" )
        break
    case "EUR":
        convert (amount.value, euro, "€")
        break
    case "GBP":   
    convert (amount.value, libra, "£") 
        break  
}

})

function convert (amount, price, symbol) {
try {

  description.textContent= `${symbol} 1 = ${currencyBRL(price)}`

  //Calcula o total
  let total = amount * price
  total = currencyBRL(total)

  //Exibe o resultado total
  result.textContent = total

  footer.classList.add ("show-result")
}

catch (error) {
    console.log (error)
    footer.classList.remove ("show-result")

alert ("Ocorreu um erro inesperado, por favor tente novamente.")
}
}

//Formata a moeda para real BR.
function currencyBRL (value){
return Number(value).toLocaleString("pt-BR", //Convertido para número para poder usar o toLocaleString
{style:"currency", 
currency:"BRL",})
}
