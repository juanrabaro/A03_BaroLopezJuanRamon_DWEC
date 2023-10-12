function recursive(num) {
    if (num === 1) {
        return "bauuuba";
    } else {
        return recursive(num - 1) + " bauuuba";
    }
}

function hh() {
    const input = parseInt(document.getElementById("input").value)
    const resultP = document.getElementById("result")
    const result = recursive(input)

    resultP.textContent = result
}