/**
 * Está función me permite tomar una carta del deck
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} Retorna una carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}