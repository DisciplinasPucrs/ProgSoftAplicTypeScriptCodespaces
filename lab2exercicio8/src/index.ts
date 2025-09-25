function calculaFequencia(array:number[]):Map<number,number> {
    const tabela = new Map<number,number>();
    array.forEach(numero => {
        if (!tabela.has(numero)) {
            tabela.set(numero,1);
        } else {
            let contagemAtual = tabela.get(numero)!;
            contagemAtual++;
            tabela.set(numero,contagemAtual);
        }
    });
    return tabela;
}

console.log(calculaFequencia([1,2,3,1,2,0,2]));
