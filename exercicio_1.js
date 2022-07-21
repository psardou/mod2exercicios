function calculaPreco(produto, preco) {
    let custoEnvio = 0;
    let precoFinal = 0;

    if (preco >= 1 && preco <= 2000) {
        custoEnvio = 300;
    } else if (preco <= 4000) {
        custoEnvio = 450;
    } else {
        custoEnvio = 700;
    }

    precoFinal = preco + custoEnvio;

    console.log( `O produto ${produto} custa ${preco}. Seu custo de envio é ${custoEnvio}. Portanto, o preço final é ${precoFinal}` );
}

calculaPreco('Macbook', 4500);
calculaPreco('Celular', 500);
calculaPreco('Mochila', 150);
