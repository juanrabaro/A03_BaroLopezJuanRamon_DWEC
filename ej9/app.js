
function calculoAritmetico() {
    var input = document.getElementById("input").value
    var resultado = eval(input)

    var p = document.getElementById("result")
    p.textContent = "El resultado es: " + resultado
}