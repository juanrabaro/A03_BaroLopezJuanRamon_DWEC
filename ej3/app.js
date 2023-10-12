var result = []
var array = [[5, 4, 6], [2, 9, 3], [8, 1, 7]]

function flatArray( array ) {
    var result = []
    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = 0; j < array[i].length; j++ ) {
            result.push(array[i][j])
        }
    }
    return result
}

result = flatArray(array)


function sortArray(array) {
    var length = array.length
    var changed

    do {
        changed = false
        for (var i = 0; i < length - 1; i++) {
            if (array[i] > array[i + 1]) {
            var remplace = array[i]
            array[i] = array[i + 1]
            array[i + 1] = remplace
            changed = true;
        }
    }
    } while ( changed )
}

var p = document.getElementById("matriz")
p.textContent = array

sortArray(result)
var resultado = document.getElementById("result")
resultado.textContent =  result

