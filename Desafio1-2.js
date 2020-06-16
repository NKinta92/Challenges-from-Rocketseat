// CONSTRUCAO E IMPRESSAO DE OBJECTOS

const usuario = {
    nome: "Nuno Faria",
    empresa: {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programacao",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: "260"
    }
}
}

console.log(`A empresa ${usuario.empresa.nome} esta localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)

 // VECTORES E OBJECTOS

 const pessoa = {
        nome: "Kinta",
        idade: 28,
        tecnologias: [
            {nome: 'C++', especialidade: 'Desktop'},
            {nome: 'Python', especialidade: 'Data Science'},
            {nome: 'JavaScript', especialidade: 'Web/Mobile'}
        ]
    }

console.log(`O usuario ${pessoa.nome} tem ${pessoa.idade} anos, e usa a tecnologia ${pessoa.tecnologias[2].nome} com a especialidade ${pessoa.tecnologias[2].especialidade}`)
