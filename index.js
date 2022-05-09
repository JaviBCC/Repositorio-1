
function sum (x, y) {
    let resultado = x+y;
    return resultado;
}

function subs (x, y) {
    let resultado = x-y;
    return resultado;
}

function mult (x, y) {
    let resultado = x*y;
    return resultado;
}

function div (x, y) {
    let resultado = x/y;
    return resultado;
}

function cuad (num) {
    let resultado = (num * num)
    return resultado;
}


module.exports = {sum, subs, mult, div}