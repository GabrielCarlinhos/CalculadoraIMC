
function calcularIMC() {
    const alturaInput = document.getElementById('alturaInput').value
    const pesoInput = document.getElementById('pesoInput').value


    altura = alturaInput / 100
    peso = pesoInput

    pessoa = Pessoa(altura, peso)
    pessoa.IMC = pessoa.peso / (Math.pow(pessoa.altura, 2))
    pessoa.IMC = parseFloat(pessoa.IMC.toFixed(2));

    const imc = document.getElementById('resultadoIMC')
    imc.setAttribute('step', '.001')
    if (pessoa.IMC <= 0) {
        alert("corno")
     } if (pessoa.IMC < 18.5){
            imc.innerText = pessoa.IMC + " - Você está abaixo do peso"
    } if (pessoa.IMC >= 18.5 && pessoa.IMC < 25) {
        imc.innerText = pessoa.IMC + " - Seu peso está normal"
    } if (pessoa.IMC >= 25 && pessoa.IMC < 30) {
        imc.innerText = pessoa.IMC + " - Você está acima do peso"
    } if (pessoa.IMC >= 30 && pessoa.IMC < 35) {
        imc.innerText = pessoa.IMC + " - Você está com obesidade grau I"
    } if (pessoa.IMC >= 35 && pessoa.IMC < 40) {
        imc.innerText = pessoa.IMC + " - Você está com obesidade grau II"
    } if (pessoa.IMC >=40){
        imc.innerText = pessoa.IMC + " - Você esta com obesidade grau III"
    }

    
}