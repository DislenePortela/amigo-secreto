let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validação para garantir que o nome não está vazio e não é duplicado
    if (nome === "") {
      alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nome)) {
       alert('Esse nome já foi adicionado');
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);
    atualizarLista();

    // Limpa o input
    input.value = "";

}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpa a lista antes de atualizar

    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {

    // Verifica se há pelo menos 2 amigos
    if (amigos.length < 2) {
       alert('Adicione pelo menos 2 amigos');
        return;
    }

    // Sorteio de um amigo aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong> 🎉</li>`;
     
    // Limpa a lista de amigos após o sorteio
     amigos = []; // Esvazia o array
     atualizarLista(); // Atualiza a interface para remover os nomes da lista
 
}

// Adiciona eventos aos botões para não precisar usar "onclick" no HTML
document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
document.getElementById("botaoSortear").addEventListener("click", sortearAmigo);
