let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        alert("Solo se permiten nombres (sin números ni caracteres especiales).");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este amigo ya ha sido agregado.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
