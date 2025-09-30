//import * as fs from 'node:fs';
import { readFile } from 'node:fs/promises';

/*
const obj = {
    nome: 'john doe',
    idade: 22
};
const json = JSON.stringify(obj);
try {
    fs.writeFileSync('dados.json', json);
} catch (error) {
    console.error('Falha de escrita no arquivo');
    console.error((error as Error).name);
    console.error((error as Error).message);
}
*/
/*
//Lendo arquivo assincrono via callback
fs.readFile('dados.json','utf-8', (err,data) => {
    if (err) {
        console.error('Falha de leitura no arquivo');
        console.error((err as Error).name);
        console.error((err as Error).message);
    } else {
        try {
            const obj = JSON.parse(data);
            console.log(obj);
        } catch (error) {
            console.error('Falha na desserialização');
            console.error((error as Error).name);
            console.error((error as Error).message);
        }
    }
});
console.log('fim');
*/

/*
//Lendo arquivo assincrono via promise
console.log('inicio');
readFile('dados.json','utf-8')
    .then(dados => {
        const obj = JSON.parse(dados);
        console.log(obj);
    })
    .catch(error => {
        console.error('Falha de processamento');
        console.error((error as Error).name);
        console.error((error as Error).message);
    })
console.log('fim');
*/

//Lendo arquivo assincrono via promise com async/await
async function main() {
    console.log('inicio');
    try {
        const dados = await readFile('dados.json', 'utf-8');
        const obj = JSON.parse(dados);
        console.log(obj);
    } catch (error) {
        console.error('Falha de processamento');
        console.error((error as Error).name);
        console.error((error as Error).message);
    }
    console.log('fim');
}
main();