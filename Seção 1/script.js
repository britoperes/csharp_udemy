const exercicio11 = ()=>{
    
    let produto1 = (window.prompt('Insira os dados do produto 1')).split(' ');
    console.log(produto1);
    let produto2 = (window.prompt('Insira os dados do produto 2')).split(' ');
    console.log(produto2);
    window.alert(`VALOR A PAGAR: R$${(produto1[1]*produto1[2])+(produto2[1]*produto2[2])}`)
}

const exercicio12 = ()=>{
    let pi = 3.14159;
    let raio = window.prompt('Insira o raio do circulo');
    let area = Math.round((pi * Math.pow(raio, 2))*10000)/10000;
    console.log(area);
    window.alert(`A=${area}`)
}

const exercicio21 = ()=>{
    let cardapio = [
        {codigo:1,espec:'cachorroquente',valor:4},
        {codigo:2,espec:'xsalada',valor:4.5},
        {codigo:3,espec:'xbacon',valor:5},
        {codigo:4,espec:'torrada',valor:2},
        {codigo:5,espec:'refri',valor:1.5}
    ];
    let pedido = (window.prompt('Insira o codigo do produto e a quantidade comprada')).split(' ');
    let aux = false;
    let i = 0;
    while(aux==false){
        if(pedido[0] == cardapio[i].codigo){
            window.alert(`Total: R$${pedido[1]*cardapio[i].valor}`);
            aux=true;
        } else{
            i++;
        }
    }
}