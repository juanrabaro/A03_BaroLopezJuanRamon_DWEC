class Wallet {
    constructor(nombre, b5, b10, b20) {
        this.nombre = nombre
        this.b5 = b5
        this.b10 = b10
        this.b20 = b20
    }

    getNombre() {
        console.log(this.nombre)
    }
    setNombre(nombreNuevo) {
        this.nombre = nombreNuevo
        console.log(this.nombre)
    }
    
    getB5() {
        console.log(`${this.b5*5} en billetes de 5`)
    }
    setB5(nuevoB5) {
        this.b5 = nuevoB5
        console.log(this.nuevoB5)
    }
    
    getB10() {
        console.log(`${this.b10*10} en billetes de 10`)
    }
    setB10(nuevoB10) {
        this.b10 = nuevoB10
        console.log(this.nuevoB10)
    }
    
    getB20() {
        console.log(`${this.b20*20} en billetes de 20`)
    }
    setB20(nuevoB20) {
        this.b20 = nuevoB20
        console.log(this.nuevoB20)
    }   
}

const mostMoney = function([m1, m2, m3, m4, m5, m6, m7]) {
    var sumaM1 = m1.b5*5 + m1.b10*10 + m1.b20*20
    var sumaM2 = m2.b5*5 + m2.b10*10 + m2.b20*20
    var sumaM3 = m3.b5*5 + m3.b10*10 + m3.b20*20
    var sumaM4 = m4.b5*5 + m4.b10*10 + m4.b20*20
    var sumaM5 = m5.b5*5 + m5.b10*10 + m5.b20*20
    var sumaM6 = m6.b5*5 + m6.b10*10 + m6.b20*20
    var sumaM7 = m7.b5*5 + m7.b10*10 + m7.b20*20

    var listaSumas = [sumaM1, sumaM2, sumaM3, sumaM4, sumaM5, sumaM6, sumaM7]

    var numeroMayor = Math.max(...listaSumas)

    if ( sumaM1 === sumaM2 === sumaM3 === sumaM4 === sumaM5 === sumaM6 === sumaM7 ) {
        return "Cualquiera"
    } else {
        return `Monedero ${listaSumas.indexOf(numeroMayor) + 1}`
    }
}


var m1 = new Wallet("Monedero 1", 0, 0, 2)
var m2 = new Wallet("Monedero 2", 0, 4, 0)
var m3 = new Wallet("Monedero 3", 8, 1, 0)
var m4 = new Wallet("Monedero 4", 2, 0, 1)
var m5 = new Wallet("Monedero 5", 0, 2, 1)
var m6 = new Wallet("Monedero 6", 1, 2, 0)
var m7 = new Wallet("Monedero 7", 0, 3, 0)

var result = document.getElementById("result")
result.textContent = mostMoney([m1, m2, m3, m4, m5, m6, m7])

