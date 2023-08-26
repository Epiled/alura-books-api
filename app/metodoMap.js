function aplicarDesconto(lista) {
    let livros = lista.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * 0.3)}
    })

    return livros;
}