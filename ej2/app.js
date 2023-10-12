
var num1 = 0
var num2 = 0
var num3 = 0
var num4 = 0
var num5 = 0
var num6 = 0
var num7 = 0
var num8 = 0
var num9 = 0
var num10 = 0
var num11 = 0
var num12 = 0

for ( i = 1; i <= 36000; i++ ) {
    var randomNum = parseInt((Math.random()*12) + 1)
    switch ( randomNum ) {
        case 1:
            num1++
            break
        case 2:
            num2++
            break
        case 3:
            num3++
            break
        case 4:
            num4++
            break
        case 5:
            num5++
            break
        case 6:
            num6++
            break
        case 7:
            num7++
            break
        case 8:
            num8++
            break
        case 9:
            num9++
            break
        case 10:
            num10++
            break
        case 11:
            num11++
            break
        case 12:
            num12++
            break
    }
}

var p = document.getElementById("result")
p.textContent = `El número 1 ha salido: ${num1} veces, el número 2 ha salido: ${num2} veces, el número 3 ha salido: ${num3} veces, el número 4 ha salido: ${num4} veces, el número 5 ha salido: ${num5} veces, el número 6 ha salido: ${num6} veces, el número 7 ha salido: ${num7} veces, el número 8 ha salido: ${num8} veces, el número 9 ha salido: ${num9} veces, el número 10 ha salido: ${num10} veces, el número 11 ha salido: ${num11} veces, el número 12 ha salido: ${num12} veces.`