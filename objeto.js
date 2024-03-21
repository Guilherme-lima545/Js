const dotNotation = {
    prop1: "Sou uma propriedade que será acessada",
    metodo: function () {
        return "sou o retorno e um metodo"
    }
}

console.log(dotNotation.prop1)
console.log(dotNotation.metodo())


const bracketNotation = {
    prop1: "Sou uma propriedade que será acessada",
    metodo: function () {
        return "sou o retorno e um metodo"
    }
}

console.log(bracketNotation["prop1"])
console.log(bracketNotation["metodo"]())