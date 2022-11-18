const passInput = document.querySelector("#inputPasswordId")
const lenInput = document.querySelector("#inputLengthId")
const infoLength = document.querySelector('label[for="inputLengthId"]')
const btnGerar = document.querySelector("#btnGerar")

const chkLower = document.querySelector("#chkLowerId")
const chkUpper = document.querySelector("#chkUpperId")
const chkNumber = document.querySelector("#chkNumbersId")
const chkSymbols = document.querySelector("#chkSymbolsId")

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["!", "@", "#", "$", "&"]

const caracters = Array.from(Array(26)).map((_, i) => i + 97) //Percorre as 26 posicoes do alfabeto 
const lowerCaseCaracters = caracters.map((item) => String.fromCharCode(item)) 
const upperCaseCaracters = lowerCaseCaracters.map((item) => item.toUpperCase()) //retorna array com letras maisculas

infoLength.innerHTML = lenInput.value //exibe tamanho da senha na tela

lenInput.addEventListener("change", () => {
    infoLength.innerHTML = lenInput.value
})

btnGerar.addEventListener("click", () => {
    generatePassword(
        chkNumber.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        lenInput.value
        )
})

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    Length
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? lowerCaseCaracters : []),
        ...(hasUppercase ? upperCaseCaracters : [])
    ]

    if (newArray.length === 0) return
    
    let password = ""

    for(let i = 0; i<Length; i++){
        const randomIndex = Math.floor(Math.random() * newArray.length)
        password += newArray[randomIndex]
    }

    passInput.value = password
}