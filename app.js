let participantes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    let mensagemErro = document.getElementById("mensagemErro"); // Elemento para a mensagem de erro

    if (nome === "") {
        mensagemErro.textContent = "Digite o próximo nome"; // Mensagem na tela
        return;
    }

    if (participantes.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    participantes.push(nome);
    atualizarLista();
    

    // Limpa o campo e a mensagem de erro após adicionar um nome
    input.value = "";
    mensagemErro.textContent = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    participantes.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Adicione pelo menos 1 participante para sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * participantes.length);
    let amigoSorteado = participantes[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong> 🎉</li>`;
      
    // Esconde a lista de participantes
       let lista = document.getElementById("listaAmigos");
       lista.innerHTML = ""; // Limpa a lista para exibir apenas o sorteado
}

// Adiciona eventos aos botões para evitar usar "onclick" no HTML
document.getElementById("botaoSortear").addEventListener("click", sortearAmigo);
document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
