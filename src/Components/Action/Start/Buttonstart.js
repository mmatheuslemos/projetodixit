import React from "react";
import { valoresdosjogadores } from "../../Players/Players";
import { coresdojogador } from "../Add/Buttonadd";
import './Buttons.css'

export function Startboard() {
    document.getElementById('Boardt').style.display = 'flex';
}

export function movercoelho() {
    
    const cores = ['vermelho', 'rosa', 'azul', 'preto', 'verde', 'amarelo'];

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[1] === i && coresdojogador[1] === cores[j]) {
                document.getElementById('iconimagecoelho' + cores[j] + i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = i - 1;
                while (g > 0) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[2] === i && coresdojogador[2] === cores[j]) {
                document.getElementById('iconimagecoelho'+cores[j]+i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = i - 1;
                while (g > 0) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[3] === i && coresdojogador[3] === cores[j]) {
                document.getElementById('iconimagecoelho'+cores[j]+i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = i - 1;
                while (g > 0) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[4] === i && coresdojogador[4] === cores[j]) {
                document.getElementById('iconimagecoelho'+cores[j]+i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = i - 1;
                while (g > 0) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[5] === i && coresdojogador[5] === cores[j]) {
                document.getElementById('iconimagecoelho'+cores[j]+i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = i - 1;
                while (g > 0) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[6] === i && coresdojogador[6] === cores[j]) {
                document.getElementById('iconimagecoelho'+cores[j]+i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = i - 1;
                while (g > 0) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }
}

export function movercoelhoparatras() {
    const cores = ['vermelho', 'rosa', 'azul', 'preto', 'verde', 'amarelo'];

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[1] === i && coresdojogador[1] === cores[j]) {
                document.getElementById('iconimagecoelho' + cores[j] + i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = 30;
                while (g > i) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[2] === i && coresdojogador[2] === cores[j]) {
                document.getElementById('iconimagecoelho' + cores[j] + i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = 30;
                while (g > i) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[3] === i && coresdojogador[3] === cores[j]) {
                document.getElementById('iconimagecoelho' + cores[j] + i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = 30;
                while (g > i) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[4] === i && coresdojogador[4] === cores[j]) {
                document.getElementById('iconimagecoelho' + cores[j] + i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = 30;
                while (g > i) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[5] === i && coresdojogador[5] === cores[j]) {
                document.getElementById('iconimagecoelho' + cores[j] + i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = 30;
                while (g > i) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }
    
    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[6] === i && coresdojogador[6] === cores[j]) {
                document.getElementById('iconimagecoelho' + cores[j] + i).style.visibility = 'visible';
                /*tornar invisivel os outros coelhos da mesma cor*/
                var g = 30;
                while (g > i) {
                    document.getElementById('iconimagecoelho' + cores[j] + g).style.visibility = 'hidden';
                    g = g - 1;
                }
            }
        }
    }

}


function Buttonstart() {
    return (
        <button onClick={() => { Startboard(); movercoelho() }} id="buttonstart">START</button>
    )
}

export default Buttonstart;