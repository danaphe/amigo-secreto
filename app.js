let listaAmigos = [];
let ganador= document.getElementById("resultado");

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
    //se actualizan los campos si se agrega un nuevo amigo, se debera sortear de nuevo y el ganador sera otro
    ganador.innerHTML="";
    for (let i=0; i< listaAmigos.length ;i++){
        lista.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if (listaAmigos.length<=1){
        alert("Error, no puede sortear hasta que agrege mas amigos a la lista");
    } else {
        let amigoRandom =  Math.floor(Math.random()*(listaAmigos.length-1))+1;
            let amigoGanador = listaAmigos[amigoRandom];
            ganador.innerHTML = `Felicidades el ganador es ${amigoGanador}`;
    }
}

function resetear(){
   document.getElementById("listaAmigos").innerHTML = "";
   document.getElementById("resultado").innerHTML = "";
   listaAmigos.length=0;
}
