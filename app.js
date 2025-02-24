// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function agregarAmigo(){
    let texto = document.getElementById("amigo").value.trim();

    if (texto === ""){
        alert("Campo vacio, por favor, inserte un nombre.");
    }else {
        listaAmigos.push(texto);
        console.log(listaAmigos);
    }
    document.querySelector('#amigo').value = '';
    actualizarLista();
}

function actualizarLista(){
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML="";

    for (let i=0; i< listaAmigos.length ;i++){
        lista.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}
