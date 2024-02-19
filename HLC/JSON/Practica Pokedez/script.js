function buscarPokemon() {
    // Obtener el nombre del Pokémon desde el cuadro de texto
    var nombrePokemon = document.getElementById('searchInput').value.trim().toLowerCase();

    // Construir la URL de la API REST de Pokémon
    var url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}/`;

    // Realizar la solicitud a la API utilizando fetch
    fetch(url)
    .then(response => {
        if (!response.ok) {
            // Para mostrar el error por consola.
            // throw new Error(`No se encontró el Pokémon "${nombrePokemon}". ¡Intenta con otro nombre!`);
            // Para mostrar el error por alert.
            alert(`No se encontró el Pokémon "${nombrePokemon}". ¡Intenta con otro nombre!`);
        }
        return response.json();
    })
        .then(data => {
            // Mostrar los resultados en el div de resultado
            mostrarResultado(data);
        })
        .catch(error => {
        // Manejar errores
        console.error("Error al buscar el Pokémon:", error);
        mostrarError(error.message);
    });
}

// Funcion para mostrar con resultado correcto
function mostrarResultado(data) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>${data.name}</h2>`;
    resultDiv.innerHTML += `<img src="${data.sprites.front_default}" alt="${data.name}" class="sprite" id="frontSprite">`;
    resultDiv.innerHTML += `<img src="${data.sprites.back_default}" alt="${data.name}" class="sprite" id="backSprite">`;
    resultDiv.innerHTML += `<p><strong>Tipo:</strong> ${obtenerTipos(data.types)}</p>`;
    resultDiv.innerHTML += `<p><strong>Habilidades:</strong> ${obtenerHabilidades(data.abilities)}</p>`;
    resultDiv.innerHTML += `<p><strong>Movimiento:</strong> ${obtenerMovimiento(data.moves)}</p>`;
    resultDiv.innerHTML += `<p><strong>Peso:</strong> ${data.weight} hectogramos</p>`;
}

// función axuliar para obtener los tipos del Pokémon.Pokémon
function obtenerTipos(types){
    return types ? types.map(type => type.type.name).join(', ') : 'No disponible';
}

function obtenerHabilidades(abilities){
    return abilities ? abilities.map(ability => ability.ability.name).join(', ') : 'No disponible';
}

function obtenerMovimiento(moves){
    if(moves.length > 0 && moves){
        const primerosSeisMovimientos = moves.slice(0, 6);
        return primerosSeisMovimientos.map(move => move.move.name).join(', ');
    } else{
        return 'No hay movimientos disponibles.'
    }
}

// Funcion para mostrar en caso de error
function mostrarError(){
    var resultado = document.getElementById('result');
    resultado.innerHTML = '<p class="error">Error en la búsqueda! Espero que no seas del Team Rocket...</p>';
}