/*
2C = Two of Clubs
2D = Two of Diaminds
2H = Two of Hearts
2s = Two of Spades
*/

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosPc =0;
// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasPc = document.querySelector('#pc-cartas');

// Esta funcion crea una nueva baraja de las cartas
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for (let esp of especiales) {
        for (const tipo of tipos) {
            deck.push(esp + tipo);
        }
        
    }
    deck = _.shuffle(deck); // Con esto desordenamos las cartas
    console.log(deck);
    return deck;
}

// Esta funcion pide una carta
const pedirCarta = () => {
    if(deck.length === 0){
        alert('No hay cartas disponibles')
        throw 'No hay cartas disponibles';
    }
    return deck.pop();
}
// pedirCarta();


// Esta funcion le asigna un valor a la carta
valorCarta = (carta) => {
    let valor = carta.substring(0, carta.length - 1);
    if (isNaN(valor)) {
        return (valor === 'A') ? 11 : 10
    } else {
        return valor * 1;
    }
}

// Turno computadora
const turnoPc = ( puntajeMinimo ) => {
    do{
        const carta = pedirCarta();
        puntosPc += valorCarta( carta );
        puntosHTML[1].innerText = puntosPc;
    
    
        const imgCarta = document.createElement('img');
        imgCarta.src= `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
    
        divCartasPc.append( imgCarta );
        if (puntajeMinimo > 21) {
            break;
        }
    }while( (puntosPc < puntajeMinimo) && (puntajeMinimo <= 21));
    
    setTimeout(() => {    
        if (puntosPc === puntajeMinimo) {
            alert('Nadie ha ganado');
        }
        else if (puntosPc > 21) {
            alert('Jugador_Jean ha ganado!');
        }
        else if ((puntajeMinimo < puntosPc) && (puntosPc <= 21)) {
            alert('PC ha ganado!');
        }
        else {
            alert('Lo siento mucho, has perdido!');
        }
    }, 35); 
}

// console.log({valor: valorCarta(pedirCarta())});


// Eventos
btnPedir.addEventListener('click',() =>{

    const carta = pedirCarta();
    puntosJugador += valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;


    const imgCarta = document.createElement('img');
    imgCarta.src= `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append( imgCarta );

    if (puntosJugador > 21) {
        // alert('Lo siento mucho, has perdido!');
        btnPedir.disabled = true; 
        btnDetener.disabled = true;
        turnoPc( puntosJugador );
    } else if ( puntosJugador === 21 ) {
        // alert('BlackJack :D! Felicidades');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoPc( puntosJugador ); 
    }
});
btnDetener.addEventListener('click',() =>{

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoPc( puntosJugador );

});
btnNuevo.addEventListener('click',()=>{

    deck = [];
    crearDeck();
    btnPedir.disabled = false;
    btnDetener.disabled = false;

    puntosJugador = 0;
    puntosPc      = 0;

    puntosHTML[0].innerText = puntosJugador;
    puntosHTML[1].innerText = puntosPc;

    divCartasJugador.innerHTML = '';
    divCartasPc.innerHTML      = '';
});