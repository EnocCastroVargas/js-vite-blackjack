import { valorCarta } from './';
/**
 * Turno: 0 = primer jugador y el último será la computadora
 * @param {String} carta Nombre de la carta a crear
 * @param {Number} turno Si es el primer jugador o la computadora. 
 * Ejemplo: Turno: 0 = primer jugador y el último será la computadora.
 * @param {Array<Number>} puntosJugadores Es un arreglo de números. Ejemplo: [0, 0] en donde el primer 0 hace
 * referencia al primer jugador y el último a la computadora. 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar el puntaje tanto de la computadora como del jugador. 
 * @returns 
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {
    
    if ( !puntosJugadores ) throw new Error('Puntos jugadores son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}