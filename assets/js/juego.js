
const miModulo = (function () {
    'use string' // Nos sirve para que JS evalue mi programa de forma estricta, nos ayuda a evitar errores

    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    // let puntosJugador = 0,
    //     puntosPc      = 0;
    let puntosJugadores = [];
    // Referencias del HTML
    const btnPedir         = document.querySelector('#btnPedir'),
          btnDetener       = document.querySelector('#btnDetener'),
          btnNuevo         = document.querySelector('#btnNuevo'),
          puntosHTML       = document.querySelectorAll('small'),
        //   divCartasJugador = document.querySelector('#jugador-cartas'),
        //   divCartasPc      = document.querySelector('#pc-cartas');
          divCartasJugadores = document.querySelectorAll('.divCartasJugador');

    const iniciarJuego = ( cantJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < cantJugadores; i++) {
            puntosJugadores.push(0);
        }
        btnPedir.disabled = false;
        btnDetener.disabled = false;

        puntosHTML.forEach( elem => elem.innerText = 0)
        // puntosHTML[0].innerText = puntosJugadores[0];
        // puntosHTML[1].innerText = puntosJugadores[puntosJugadores.length - 1];

        divCartasJugadores.forEach( elem => elem.innerHTML = '')
        // divCartasJugadores[0].innerHTML = '';
        // divCartasJugadores[1].innerHTML = '';
    }
    // Esta funcion crea una nueva baraja de las cartas
    const crearDeck = () => {
        deck=[];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (let esp of especiales) {
            for (const tipo of tipos) {
                deck.push(esp + tipo);
            }
        }
        return _.shuffle(deck);
    }

    // Esta funcion pide una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            alert('No hay cartas disponibles')
            throw 'No hay cartas disponibles';
        }
        return deck.pop();
    }

    // Esta funcion le asigna un valor a la carta
    valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        if (isNaN(valor)) {
            return (valor === 'A') ? 11 : 10
        } else {
            return valor * 1;
        }
    }
    //  turno: 0 = primer jugador y turno: 1 = computadora
    const acumularPuntos = ( carta,turno ) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    const crearCartas = ( carta,turno ) => {
        const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');
            // divCartasPc.append( imgCarta );
            divCartasJugadores[turno].append( imgCarta ); 
    }
    const determinarGanador = () => {
        
        const [ puntajeMinimo, puntosPc ] = puntosJugadores;
        setTimeout(() => {
            if (puntosPc === puntajeMinimo) {
                alert('Nadie ha ganado');
            }
            else if (puntosPc - 1 > 21) {
                alert('Jugador_Jean ha ganado!');
            }
            else if ((puntajeMinimo < puntosPc) && (puntosPc <= 21)) {
                alert('PC ha ganado!');
            }
            else {
                alert('Lo siento mucho, has perdido!');
            }
        }, 25);

    }
    // Turno computadora
    const turnoPc = ( puntajeMinimo ) => {
        let puntosPc = 0;
        do {
            const carta = pedirCarta();
            puntosPc = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCartas(carta, puntosJugadores.length - 1);
        
            // const imgCarta = document.createElement('img');
            // imgCarta.src = `assets/cartas/${carta}.png`;
            // imgCarta.classList.add('carta');
            // divCartasPc.append(imgCarta);

            // if (puntajeMinimo > 21) {
            //     break;
            // }
        } while ((puntosPc < puntajeMinimo) && (puntajeMinimo <= 21));
        determinarGanador();
    }

    // console.log({valor: valorCarta(pedirCarta())});


    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        // puntosJugadores[0] += valorCarta(carta);
        // puntosHTML[0].innerText = puntosJugadores[0];
        const puntosJugador = acumularPuntos( carta, 0 );
        crearCartas( carta, 0 );

        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${carta}.png`;
        // imgCarta.classList.add('carta');
        // divCartasJugador.append(imgCarta);

        if (puntosJugador > 21) {
            // alert('Lo siento mucho, has perdido!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoPc(puntosJugador);
        } else if (puntosJugador === 21) {
            // alert('BlackJack :D! Felicidades');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoPc(puntosJugadores[puntosJugadores.length-1]);
        }
    });

    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoPc(puntosJugadores[0]);

    });

    btnNuevo.addEventListener('click', () => {

        iniciarJuego();
    });

    return { // Todo lo que esté dentro de este return son los datos públicos para que un script fuera de este pueda acceder a lo que pongamos aqui
        nuevoJuego: iniciarJuego
    };
})();
