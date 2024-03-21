const objs = [
    {
        nome: "Guilherme",
        idade: 30,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: "programador",
            empresa: "empresa x"
        },
        hobbies: ["programar", "correr", "ler"]
        
    },
    {
        nome: "joao",
        idade: 40,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null
        },
        hobbies: [ "ler"]
    }
]

const jsonData = JSON.stringify(objs)

console.log(jsonData)


const objData = JSON.parse(jsonData)

console.log(objData) 