let listaAmigos = [];

// Função para adicionar amigos na lista e limpar o resultado do sorteio anterior
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();
document.getElementById('resultado').innerHTML = '';

    // Verificando se o nome foi digitado
    if (nomeAmigo === '') {
        alert('Por favor, antes de clicar em adicionar, digite um nome.');
        return;
    }

    // Adicionando o nome na lista
    listaAmigos.push(nomeAmigo);
    inputAmigo.value = '';
    console.log(listaAmigos);//RETIRAR QUANDO FOR PRECISO
    atualizarListaDeAmigos();
}
//Função para atualizar a lista de amigos
function atualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of listaAmigos){
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}
//Função para sortear amigos
function sortearAmigo(){
    //Validar se a lista está vazia ou tem menos que dois amigos
    if(listaAmigos.length === 0){
        alert('A lista de amigos está vazia, por favor insira no mínimo dois nomes!')
    return;
    }
if(listaAmigos.length < 2){
    alert('Você deve inserir dois amigos ou mais para realizar o sorteio!');
return;
}
//Gerando um indíce aleatório
let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
console.log(`O indice aleatorio é ${indiceAleatorio}`) //RETIRAR QUANDO FOR PRECISO

//Mostrando o resultado
let amigoSorteado = listaAmigos[indiceAleatorio];
let resultado = document.getElementById('resultado');
resultado.innerHTML = `O amigo sorteado foi ${amigoSorteado}!!`;
}

