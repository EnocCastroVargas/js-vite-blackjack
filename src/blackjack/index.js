import _ from 'underscore';
import { crearDeck, pedirCarta, determinarGanador, crearCarta, acumularPuntos } from './usecases/index';

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];    

// Referencias del HTML
const btnNuevo = document.querySelector('#btnNuevo'),
      btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small');



const inicializarJuego = ( numJugadores = 2 ) => {
    deck = crearDeck( tipos, especiales );

    puntosJugadores = [];
    for( let i = 0; i < numJugadores; i++ ) {
        puntosJugadores.push(0);
    }

    puntosHTML.forEach( elemento => elemento.innerText = 0 );
    divCartasJugadores.forEach( elemento => elemento.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;

};


const turnoComputadora = ( puntosMinimos ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML );
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores );
            
    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    determinarGanador( puntosJugadores );

}

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML );

    crearCarta(carta, 0, divCartasJugadores );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }

});

btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    
    turnoComputadora( puntosJugadores[0] );

});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});


