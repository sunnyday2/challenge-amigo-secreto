let amigos = [];
const botonSortear = document.querySelector("#sortear");
const botonResetear = document.querySelector("#resetear");
const botonAgregar = document.querySelector("#agregar");


/**
 * Una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML.
 * Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
 * Tareas específicas:
 * - Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
 * - Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
 * - Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
 * - Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
 * @returns 
 */
function agregarAmigo(){
    if(botonSortear.disabled){  
        alert("El sorteo ya ha sido realizado, por favor resetea el juego");
        return;
    }

    let nombreIngresado = document.querySelector("#amigo").value;

    if(nombreIngresado === ""){
        alert("Por favor, ingresa un nombre valido");
        return;
    }
    
    // validar si  el nombre ingresado ya existe en la lista de amigos
    if(amigos.includes(nombreIngresado)){
        alert("El amigo ya ha sido ingresado");
        return;
    }

    amigos.push(nombreIngresado);
    actualizarListaAmigos();
    document.querySelector("#amigo").value = "";

    return;
}

function actualizarListaAmigos(){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo);
    }
    return;
}

/**
 * 
 * Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
 * Usa Math.random() y Math.floor() para obtener un índice aleatorio.
 * Tareas específicas:
 * - Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
 * - Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
 * - Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
 * - Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById() e innerHTML para mostrar el amigo sorteado.
 * @returns 
 */
function sortearAmigo() {
    if(amigos.length < 2){
        alert("Por favor, ingresa al menos dos amigos");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(`amigoSorteado: ${amigoSorteado}`);
    console.log(`lista amigos: ${amigos}`);
    //let resultado = document.querySelector("#resultado");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let nombreAmigoSorteado = document.createElement("li");
    nombreAmigoSorteado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    resultado.appendChild(nombreAmigoSorteado);
    if (botonSortear) {
        botonSortear.disabled = true;
        botonSortear.style.backgroundColor = 'var(--color-tertiary)';
        botonSortear.style.color = 'var(--color-text)';
    }

    return;
}

function resetearJuego(){
    amigos = [];
    document.querySelector("#listaAmigos").innerHTML = "";
    document.querySelector("#resultado").innerHTML = "";
    if (botonSortear) {
        botonSortear.style.backgroundColor = 'var(--color-button)';
        botonSortear.style.color = 'var(--color-white)';
    }
    sortear.disabled = false;
    sortear.
    return;
}