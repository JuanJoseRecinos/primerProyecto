let listaAmigos = []; // Declara un array para almacenar los nombres de los amigos.

function agregarAmigo() {
    // Obtiene el elemento input del HTML con el id "amigo".
    let amigoInput = document.getElementById('amigo');
    // Obtiene el valor (nombre) del input, elimina espacios en blanco al inicio y final, y lo convierte a minúsculas para evitar duplicados por mayúsculas/minúsculas.
    let nombreAmigo = amigoInput.value.trim().toUpperCase();
    
    // Verifica si el campo de texto no está vacío.
    if (nombreAmigo) {
        // Verifica si el nombre ya existe en la lista. El método some() comprueba si al menos un elemento en el array pasa la prueba de una función.
        if (!listaAmigos.some(amigo => amigo.toUpperCase() === nombreAmigo)) {
            // Agrega el nombre a la lista si no está duplicado.
            listaAmigos.push(nombreAmigo);
            // Llama a la función para mostrar la lista actualizada en el HTML.
            mostrarLista();
            // Limpia el campo de texto del input.
            amigoInput.value = '';
        } else {
            // Muestra una alerta si el nombre ya está en la lista.
            alert('Este nombre ya ha sido agregado.');
        }
    } else {
        // Muestra una alerta si el campo de texto está vacío.
        alert('Por favor, escribe un nombre para agregarlo.');
    }
}

function mostrarLista() {
    // Obtiene el elemento de lista desordenada (ul) del HTML donde se mostrarán los nombres.
    let listaHTML = document.getElementById('listaAmigos');
    // Limpia la lista actual en el HTML para evitar duplicar los elementos.
    listaHTML.innerHTML = '';
    
    // Recorre cada nombre en el array `listaAmigos`.
    listaAmigos.forEach(amigo => {
        // Crea un nuevo elemento de lista (li) para cada amigo.
        let listItem = document.createElement('li');
        // Asigna el nombre del amigo como el contenido de texto del elemento de lista.
        listItem.textContent = amigo;
        // Agrega el nuevo elemento de lista al HTML.
        listaHTML.appendChild(listItem);
    });
}

function sortearAmigo() {
    // Obtiene el elemento de lista (ul) donde se mostrará el resultado del sorteo.
    let resultadoHTML = document.getElementById('resultado');
    
    // Verifica si hay al menos un nombre en la lista para sortear.
    if (listaAmigos.length > 0) {
        // Genera un índice aleatorio. Math.random() genera un número entre 0 (inclusive) y 1 (exclusive). Multiplicamos por la longitud del array para obtener un rango y luego usamos Math.floor() para redondear al número entero más cercano.
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        // Selecciona un amigo del array usando el índice aleatorio.
        let amigoSorteado = listaAmigos[indiceAleatorio];
        
        // Muestra el nombre del amigo sorteado en el HTML.
        resultadoHTML.innerHTML = `<li>¡El amigo secreto es: ${amigoSorteado.toUpperCase()}!</li>`;
    } else {
        // Muestra un mensaje si la lista de amigos está vacía.
        resultadoHTML.innerHTML = `<li>No hay nombres en la lista para sortear.</li>`;
    }
}