import { valoresdosjogadores } from "../Players/Players";

export function Ranking() {
    var valorm1 = 0;
    var position1 = 0;
    var valorm2 = 0;
    var valorm3 = 0;
    var valorm4 = 0;
    var valorm5 = 0;
    var valorm6 =0;
    
    valoresdosjogadores[0] = 0;
    if (valoresdosjogadores[1] == null) {
        valoresdosjogadores[1] = 0;
    }
    if (valoresdosjogadores[2] == null) {
        valoresdosjogadores[2] = 0;
    }
    if (valoresdosjogadores[3] == null) {
        valoresdosjogadores[3] = 0;
    }
    if (valoresdosjogadores[4] == null) {
        valoresdosjogadores[4] = 0;
    }
    if (valoresdosjogadores[5] == null) {
        valoresdosjogadores[5] = 0;
    }
    if (valoresdosjogadores[6] == null) {
        valoresdosjogadores[6] = 0;
    }

    var vajs = [valoresdosjogadores[0],valoresdosjogadores[1], valoresdosjogadores[2], valoresdosjogadores[3], valoresdosjogadores[4], valoresdosjogadores[5], valoresdosjogadores[6]];
    /*Achar o máximo valores de pontos dos jogadores*/
    valorm1 = Math.max(...vajs); 
    /*Achou 2° maior valor*/
    vajs.splice(vajs.indexOf(valorm1),1);
    valorm2 = Math.max(...vajs);
    /*Achou 3° maior valor*/
    vajs.splice(vajs.indexOf(valorm2),1);
    valorm3 = Math.max(...vajs);
    /*Achou 4° maior valor*/
    vajs.splice(vajs.indexOf(valorm3),1);
    valorm4 = Math.max(...vajs);
    /*Achou 5° maior valor*/
    vajs.splice(vajs.indexOf(valorm4),1);
    valorm5 = Math.max(...vajs);
    /*Achou 6° maior valor*/
    vajs.splice(vajs.indexOf(valorm5),1);
    valorm6 = Math.max(...vajs);
    
    for(var i=1;i<7;i++){
        if(valoresdosjogadores[i]===valorm6){
            document.getElementById('rankingplayer'+i).innerHTML = '6° Sixth'
        }
    }

    for(var i=1;i<7;i++){
        if(valoresdosjogadores[i]===valorm5){
            document.getElementById('rankingplayer'+i).innerHTML = '5° Fifth'
        }
    }

    for(var i=1;i<7;i++){
        if(valoresdosjogadores[i]===valorm4){
            document.getElementById('rankingplayer'+i).innerHTML = '4° Fourth'
        }
    }

    for(var i=1;i<7;i++){
        if(valoresdosjogadores[i]===valorm3){
            document.getElementById('rankingplayer'+i).innerHTML = '3° Third'
        }
    }


    for(var i=1;i<7;i++){
        if(valoresdosjogadores[i]===valorm2){
            document.getElementById('rankingplayer'+i).innerHTML = '2° Second'
        }
    }
    
    for(var i=1;i<7;i++){
        if(valoresdosjogadores[i]===valorm1){
            document.getElementById('rankingplayer'+i).innerHTML = '1° First'
        }
    }

    

   

    


}