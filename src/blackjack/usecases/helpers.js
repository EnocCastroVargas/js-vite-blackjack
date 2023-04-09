
/**
 *  Función que se encarga de determinar un ganador
 * @param {Array<Number>} puntosJugadores Es un arreglo de números. Ejemplo: [0, 0] en donde el primer 0 hace
 * referencia al primer jugador y el último a la computadora.
 */
export const determinarGanador = ( puntosJugadores ) => {
    
    const [ puntosMinimos, puntosComputadora ] = puntosJugadores ; 

    setTimeout( () => {
        
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('La computadora gana');
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }

    }, 10 );
}


/**
 * Función que se encarga de crear la imagen de un carta en el HTML
 * @param {String} carta Nombre de la carta a crear
 * @param {Number} turno Si es el primer jugador o la computadora
 * @param {HTMLElement} divCartasJugadores Referencia a los div tanto del jugador como el de la caomputadora y es 
 * donde se iran creando las imagenes de cada uno.
 */
export const crearCarta = ( carta, turno, divCartasJugadores ) => {
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}


