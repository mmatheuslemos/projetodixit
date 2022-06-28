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
            if (valoresdosjogadores[3] === i && coresdojogador[3] === cores[j]) {
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
            if (valoresdosjogadores[4] === i && coresdojogador[4] === cores[j]) {
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
            if (valoresdosjogadores[5] === i && coresdojogador[5] === cores[j]) {
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
            if (valoresdosjogadores[6] === i && coresdojogador[6] === cores[j]) {
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

    /*Brilho das casas ocupadas e desbrilho das casas nao ocupadas*/
    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (document.getElementById('iconimagecoelho'+cores[j]+i).style.visibility === 'visible') {
                document.getElementById('rock'+i).style.backgroundColor = 'rgb(173, 173, 173)';
                document.getElementById('rock'+i).style.boxShadow = 'rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px';
                document.getElementById('rock'+i).style.transform = 'scale(1.2)';
            }
        }
    }

    for (var i = 1; i < 31; i++) {
          if(((document.getElementById('iconimagecoelhovermelho'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhovermelho'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhoazul'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhoazul'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhoamarelo'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhoamarelo'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhoverde'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhoverde'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhorosa'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhorosa'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhopreto'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhopreto'+i).style.visibility ==='hidden'))
          ){
            document.getElementById('rock' + i).style.backgroundColor = 'black';
            document.getElementById('rock' + i).style.boxShadow = 'none';
            document.getElementById('rock'+i).style.transform = 'scale(1)';
          }
    }
}



export function movercoelhoparatras() {
    const cores = ['vermelho', 'rosa', 'azul', 'preto', 'verde', 'amarelo'];

    for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (valoresdosjogadores[1] === i && coresdojogador[1] === cores[j]) {
                document.getElementById('iconimagecoelho' + cores[j] + i).style.visibility = 'visible';
                document.getElementById('rock' + i).style.backgroundColor = 'rgb(173, 173, 173)';
                document.getElementById('rock' + i).style.boxShadow = 'rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px';
                document.getElementById('rock' + i).style.transform = 'scale(1.3)';
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
                document.getElementById('rock' + i).style.backgroundColor = 'rgb(173, 173, 173)';
                document.getElementById('rock' + i).style.boxShadow = 'rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px';
                document.getElementById('rock' + i).style.transform = 'scale(1.3)';
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

     /*Brilho das casas ocupadas e desbrilho das casas nao ocupadas*/
     for (var i = 1; i < 31; i++) {
        for (var j = 0; j < 6; j++) {
            if (document.getElementById('iconimagecoelho'+cores[j]+i).style.visibility === 'visible') {
                document.getElementById('rock'+i).style.backgroundColor = 'rgb(173, 173, 173)';
                document.getElementById('rock'+i).style.boxShadow = 'rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px';
                document.getElementById('rock'+i).style.transform = 'scale(1.2)';
            }
        }
    }

    for (var i = 1; i < 31; i++) {
          if(((document.getElementById('iconimagecoelhovermelho'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhovermelho'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhoazul'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhoazul'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhoamarelo'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhoamarelo'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhoverde'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhoverde'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhorosa'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhorosa'+i).style.visibility ==='hidden'))
          &&((document.getElementById('iconimagecoelhopreto'+i).style.visibility ==='')||(document.getElementById('iconimagecoelhopreto'+i).style.visibility ==='hidden'))
          ){
            document.getElementById('rock' + i).style.backgroundColor = 'black';
            document.getElementById('rock' + i).style.boxShadow = 'none';
            document.getElementById('rock'+i).style.transform = 'scale(1)';
        }
    }
    

}


function Buttonstart() {
    return (
        <button onClick={() => { Startboard(); movercoelho() }} id="buttonstart">START</button>
    )
}

export default Buttonstart;