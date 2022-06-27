import React from "react";
import './Buttons.css'
import { movercoelho } from "../Start/Buttonstart";

export var coresdojogador = [];

function Addplayer() {
    var numerojog = 1;
    var tu1 = document.getElementById('playerjogador'+1).style.display;
    var tu2 = document.getElementById('playerjogador'+2).style.display;
    var tu3 = document.getElementById('playerjogador'+3).style.display;
    var tu4 = document.getElementById('playerjogador'+4).style.display;
    var tu5 = document.getElementById('playerjogador'+5).style.display;
    var tu6 = document.getElementById('playerjogador'+6).style.display;
    /*Adiciona jogador 1*/
    if (tu1 === '' || tu1 === 'none') {
        numerojog = 1;
    }
    /*Adicionando o Player 2*/
    if (tu1 === 'flex' && (tu2 === '' || tu2 === 'none')) {
        numerojog = 2;
    }
    /*Adicionando o Player 3*/
    if (tu1 === 'flex' && tu2 === 'flex' && (tu3 === '' || tu3 === 'none')) {
        numerojog = 3;
    }
    /*Adicionando o Player 4*/
    if (tu1 === 'flex' && tu2 === 'flex' && tu3 ==='flex' && (tu4 === '' || tu4 === 'none')) {
        numerojog = 4;
    }

    /*Adicionando o Player 5*/
    if (tu1 === 'flex' && tu2 === 'flex' && tu3 ==='flex' && tu4 ==='flex' && (tu5 === '' || tu5 === 'none')) {
        numerojog = 5;
    }

    /*Adicionando o Player 6*/
    if (tu1 === 'flex' && tu2 === 'flex' && tu3 ==='flex' && tu4 ==='flex' && tu5 ==='flex' && (tu6 === '' || tu6 === 'none')){
        numerojog = 6;
    }
    console.log(numerojog);
    document.getElementById('playerjogador'+(numerojog)).style.display = 'flex';
    /*Adicionar o coelho com a cor escolhida*/
    var valortexto = document.getElementById('selecon');
    var e = valortexto.value;
    switch (e) {
        case "Vermelho": {
            document.getElementById('rabbithead' + (numerojog)).style.backgroundColor = 'red';
            document.getElementById('rabbitbody' + (numerojog)).style.backgroundColor = 'red';
            document.getElementById('rabbitfootright' + (numerojog)).style.backgroundColor = 'red';
            document.getElementById('rabbitfootleft' + (numerojog)).style.backgroundColor = 'red';
            document.getElementById('rabbitear' + (numerojog)).style.border = '4px solid red';
            document.getElementById('rabbitear' + (numerojog) + '2').style.border = '4px solid red'; 
            /*Tirar a opção da cor selecionada*/
            document.getElementById('vermelho').style.display = 'none';
            
            coresdojogador[numerojog] = 'vermelho';
            /*colocar a borda da cor da imagem correspondente*/
            document.getElementById('photoperfil'+(numerojog)).style.setProperty('--div-color-corprincipal','red');
            /*colocar a cor  na letra*/
            document.getElementById('nameperfil'+(numerojog)).style.textShadow = '0 0 0.125em red, 0 0 0.45em red';
            document.getElementById('nameperfil'+(numerojog)).style.color = 'red';
            /*colocar os botoes coloridos*/
            document.getElementById('buttonpoint'+(numerojog)).style.setProperty('--button-color','red');
            document.getElementById('buttonpointdir'+(numerojog)).style.setProperty('--button-color','red');
            break;
        }
        case "Azul": {
            document.getElementById('rabbithead' + (numerojog)).style.backgroundColor = 'blue';
            document.getElementById('rabbitbody' + (numerojog)).style.backgroundColor = 'blue';
            document.getElementById('rabbitfootright' + (numerojog)).style.backgroundColor = 'blue';
            document.getElementById('rabbitfootleft' + (numerojog)).style.backgroundColor = 'blue';
            document.getElementById('rabbitear' + (numerojog)).style.border = '4px solid blue';
            document.getElementById('rabbitear' + (numerojog) + '2').style.border = '4px solid blue'; 
            /*Tirar a opção da cor selecionada*/
            document.getElementById('azul').style.display = 'none';
            coresdojogador[numerojog] = 'azul';
            /*colocar a borda da cor da imagem correspondente*/
            document.getElementById('photoperfil'+(numerojog)).style.setProperty('--div-color-corprincipal','blue');
            /*colocar a cor  na letra*/
            document.getElementById('nameperfil'+(numerojog)).style.textShadow = '0 0 0.125em blue, 0 0 0.45em blue';
            document.getElementById('nameperfil'+(numerojog)).style.color = 'blue';
            /*colocar os botoes coloridos*/
            document.getElementById('buttonpoint'+(numerojog)).style.setProperty('--button-color','blue');
            document.getElementById('buttonpointdir'+(numerojog)).style.setProperty('--button-color','blue');
            
            break;
        }
        case "Amarelo": {
            document.getElementById('rabbithead' + (numerojog)).style.backgroundColor = 'yellow';
            document.getElementById('rabbitbody' + (numerojog)).style.backgroundColor = 'yellow';
            document.getElementById('rabbitfootright' + (numerojog)).style.backgroundColor = 'yellow';
            document.getElementById('rabbitfootleft' + (numerojog)).style.backgroundColor = 'yellow';
            document.getElementById('rabbitear' + (numerojog)).style.border = '4px solid yellow';
            document.getElementById('rabbitear' + (numerojog) + '2').style.border = '4px solid yellow';
            /*Tirar a opção da cor selecionada*/
            document.getElementById('amarelo').style.display = 'none';
            
            coresdojogador[numerojog] = 'amarelo';
            /*colocar a borda da cor da imagem correspondente*/
            document.getElementById('photoperfil'+(numerojog)).style.setProperty('--div-color-corprincipal','yellow');
            /*colocar a cor vermelha na letra*/
            document.getElementById('nameperfil'+(numerojog)).style.textShadow = '0 0 0.125em yellow, 0 0 0.45em yellow';
            document.getElementById('nameperfil'+(numerojog)).style.color = 'yellow';
            /*colocar os botoes coloridos*/
            document.getElementById('buttonpoint'+(numerojog)).style.setProperty('--button-color','yellow');
            document.getElementById('buttonpointdir'+(numerojog)).style.setProperty('--button-color','yellow');
            break;
        }
        case "Preto": {
            document.getElementById('rabbithead' + (numerojog)).style.backgroundColor = 'black';
            document.getElementById('rabbitbody' + (numerojog)).style.backgroundColor = 'black';
            document.getElementById('rabbitfootright' + (numerojog)).style.backgroundColor = 'black';
            document.getElementById('rabbitfootleft' + (numerojog)).style.backgroundColor = 'black';
            document.getElementById('rabbitear' + (numerojog)).style.border = '4px solid black';
            document.getElementById('rabbitear' + (numerojog) + '2').style.border = '4px solid black';
            document.getElementById('rabbiteye' + (numerojog)).style.background = 'white';
            document.getElementById('rabbiteye' + (numerojog) + '2').style.background = 'white';
            /*Tirar a opção da cor selecionada*/
            document.getElementById('preto').style.display = 'none';
            coresdojogador[numerojog] = 'preto';
            /*colocar a borda da cor da imagem correspondente*/
            document.getElementById('photoperfil'+(numerojog)).style.setProperty('--div-color-corprincipal','black');
            /*colocar a cor vermelha na letra*/
            document.getElementById('nameperfil'+(numerojog)).style.textShadow = '0 0 0.125em black, 0 0 0.45em black';
            document.getElementById('nameperfil'+(numerojog)).style.color = 'black';
            /*colocar os botoes coloridos*/
            document.getElementById('buttonpoint'+(numerojog)).style.setProperty('--button-color','black');
            document.getElementById('buttonpointdir'+(numerojog)).style.setProperty('--button-color','black');
            break;
        }
        case "Verde": {
            document.getElementById('rabbithead' + (numerojog)).style.backgroundColor = 'green';
            document.getElementById('rabbitbody' + (numerojog)).style.backgroundColor = 'green';
            document.getElementById('rabbitfootright' + (numerojog)).style.backgroundColor = 'green';
            document.getElementById('rabbitfootleft' + (numerojog)).style.backgroundColor = 'green';
            document.getElementById('rabbitear' + (numerojog)).style.border = '4px solid green';
            document.getElementById('rabbitear' + (numerojog) + '2').style.border = '4px solid green';
            /*Tirar a opção da cor selecionada*/
            document.getElementById('verde').style.display = 'none';
            coresdojogador[numerojog] = 'verde';
            /*colocar a borda da cor da imagem correspondente*/
            document.getElementById('photoperfil'+(numerojog)).style.setProperty('--div-color-corprincipal','green');
            /*colocar a cor vermelha na letra*/
            document.getElementById('nameperfil'+(numerojog)).style.textShadow = '0 0 0.125em green, 0 0 0.45em green';
            document.getElementById('nameperfil'+(numerojog)).style.color = 'green';
            /*colocar os botoes coloridos*/
            document.getElementById('buttonpoint'+(numerojog)).style.setProperty('--button-color','green');
            document.getElementById('buttonpointdir'+(numerojog)).style.setProperty('--button-color','green');
            break;
        }
        case "Rosa": {
            document.getElementById('rabbithead' + (numerojog)).style.backgroundColor = 'pink';
            document.getElementById('rabbitbody' + (numerojog)).style.backgroundColor = 'pink';
            document.getElementById('rabbitfootright' + (numerojog)).style.backgroundColor = 'pink';
            document.getElementById('rabbitfootleft' + (numerojog)).style.backgroundColor = 'pink';
            document.getElementById('rabbitear' + (numerojog)).style.border = '4px solid pink';
            document.getElementById('rabbitear' + (numerojog) + '2').style.border = '4px solid pink';
            /*Tirar a opção da cor selecionada*/
            document.getElementById('rosa').style.display = 'none';
            coresdojogador[numerojog] = 'rosa';
            /*colocar a borda da cor da imagem correspondente*/
            document.getElementById('photoperfil'+(numerojog)).style.setProperty('--div-color-corprincipal','pink');
            /*colocar a cor vermelha na letra*/
            document.getElementById('nameperfil'+(numerojog)).style.textShadow = '0 0 0.125em pink, 0 0 0.45em pink';
            document.getElementById('nameperfil'+(numerojog)).style.color = 'pink';
            /*colocar os botoes coloridos*/
            document.getElementById('buttonpoint'+(numerojog)).style.setProperty('--button-color','pink');
            document.getElementById('buttonpointdir'+(numerojog)).style.setProperty('--button-color','pink');
            break;
        }

        default:
        
    }
    /*Adicionar o nome do jogador*/
    var nameofplayer = document.getElementById('boxname');
    var namedado = nameofplayer.value;
    document.getElementById('nameperfil'+(numerojog)).innerHTML = namedado;
    /*Adicionar a pontuação*/
    document.getElementById('ponto'+(numerojog)).innerHTML = 'Points:';
    /*Adicionar a classificação*/
    document.getElementById('clasif'+(numerojog)).innerHTML = 'Raking:';
    /*Apagar o nome da caixa boxname*/
    document.getElementById('boxname').value = '';
}

var valortotaljogador1 = document.getElementById('')
function infoplayers(){
      
}

function Buttonadd() {
    return (
        <button onClick={()=>{Addplayer();infoplayers();}} id="button1">Add Player</button>
    )
}


export default Buttonadd;