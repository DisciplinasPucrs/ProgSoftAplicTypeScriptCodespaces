import { PostDTO } from './postdto';

async function main() {
    const urlBase = 'https://jsonplaceholder.typicode.com';
    /*
    //GET
    try {
        const resposta = await fetch(`${urlBase}/posts`);
        if (resposta.ok) {
            const dados = await resposta.json() as PostDTO[];
            console.log(dados[0]);
        } else {
            console.log('GET status:', resposta.status);
            console.log('GET statusText:', resposta.statusText);
        }
    } catch (error) {
        console.error('Falha na requisição');
        console.error(error);
    }
    */

    //POST
    const novoPost: PostDTO = {
        id: 1,
        userId: 1,
        title: 'Um teste',
        body: 'Um corpo de teste ...'
    };
    try {
        const resposta = await fetch(`${urlBase}/posts`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(novoPost)
        });
        if (resposta.ok) {
            const dados = await resposta.json() as PostDTO;
            console.log('POST status:', resposta.status);
            console.log('POST statusText:', resposta.statusText);
            console.log(resposta.headers.get('Location'));
            console.log(dados);
        } else {
            console.log('POST status:', resposta.status);
            console.log('POST statusText:', resposta.statusText);
        }
    } catch (error) {
        console.error('Falha na requisição');
        console.error(error);
    }

}

main();