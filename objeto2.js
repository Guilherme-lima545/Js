let pessoa = {
    nome: "guilherme",
    idade: 35,
    feliz: true,
    pets: ["cachorro", "gato"],
    carros: {
        camaro: {
            placa: "123456",
            cor: "verde"
        },
        uno: {
            placa: "9876",
            cor: "branco"
        }
    },
    andar: function(km) {
        console.log(pessoa.nome + "andou"+ km + "km")
    }
}

pessoa.andar(20)

