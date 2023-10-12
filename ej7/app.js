class CaesarCipher {
    constructor(num) {
        this.num = num
    }

    encode = function(text) {
        var letras = ["v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"]
        var result = ""
        text = text.toLowerCase()
        for ( var i = 0; i < text.length; i++ ) {
            var indiceLetra = letras.indexOf(text[i])
            var nuevoIndice = indiceLetra + this.num
            result += letras[nuevoIndice].toUpperCase()
        }
        return result
    }
    
    decode = function(text) {
        var letras = ["v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"]
        var result = ""
        text = text.toLowerCase()
        for ( var i = 0; i < text.length; i++ ) {
            var indiceLetra = letras.indexOf(text[i])
            var nuevoIndice = indiceLetra - this.num
            result += letras[nuevoIndice].toUpperCase()
        }
        return result
    }
}


function cifrar(){
    var num = parseInt(document.getElementById("num").value)
    var input = document.getElementById("input").value
    var result = document.getElementById("result")

    var cifrado = new CaesarCipher(num)
    var textEncoded = cifrado.encode(input) // DWEC
    var textDecoded = cifrado.decode(textEncoded)

    result.textContent = "Texto codificado: " + textEncoded + ", texto descodificado: " + textDecoded
}

var cifrado = new CaesarCipher(5)
var textEncoded = cifrado.encode("DWEC") // DWEC
var textDecoded = cifrado.decode(textEncoded)
console.log(textEncoded)
console.log(textDecoded)