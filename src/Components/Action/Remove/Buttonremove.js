import React from "react";
import './Buttons.css'

function Removeplayer(){ 
    for(var i=1;i<7;i++) {
        document.getElementById('playerjogador'+i).style.display = 'none';
        document.getElementById('amarelo').style.display = 'flex';
        document.getElementById('verde').style.display = 'flex';
        document.getElementById('vermelho').style.display = 'flex';
        document.getElementById('azul').style.display = 'flex';
        document.getElementById('preto').style.display = 'flex';
        document.getElementById('rosa').style.display = 'flex';
    }  
    /*retirar imagens*/
}


function Buttonremove(){
    return(
        <button onClick={Removeplayer} id="button2">Remove All</button>  
    )
}

export default Buttonremove;