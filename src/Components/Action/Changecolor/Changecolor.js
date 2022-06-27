export function changecolor(){
    var valortexto = document.getElementById('selecon');
    var e = valortexto.value;
    if(e==='Vermelho'){
        document.getElementById('selecon').style.backgroundColor = "red";
        document.getElementById('selecon').style.color = "red";
        document.getElementById('name').style.setProperty('--div-color-bord','red');
        document.getElementById('boxname').style.setProperty('--div-color-bord','red');
    }
    if(e==='Azul'){
        document.getElementById('selecon').style.backgroundColor = "blue";
        document.getElementById('selecon').style.color = "blue";
        document.getElementById('name').style.setProperty('--div-color-bord','blue');
        document.getElementById('boxname').style.setProperty('--div-color-bord','blue');
    }
    if(e==='Rosa'){
        document.getElementById('selecon').style.color = "pink";
        document.getElementById('selecon').style.backgroundColor = "pink";
        document.getElementById('name').style.setProperty('--div-color-bord','pink');
        document.getElementById('boxname').style.setProperty('--div-color-bord','pink');
    }
    if(e==='Preto'){
        document.getElementById('selecon').style.color = "black";
        document.getElementById('selecon').style.backgroundColor = "black";
        document.getElementById('name').style.setProperty('--div-color-bord','black');
        document.getElementById('boxname').style.setProperty('--div-color-bord','black');
    }
    if(e==='Amarelo'){
        document.getElementById('selecon').style.color = "yellow";
        document.getElementById('selecon').style.backgroundColor = "yellow";
        document.getElementById('name').style.setProperty('--div-color-bord','yellow');
        document.getElementById('boxname').style.setProperty('--div-color-bord','yellow');
    }
    if(e==='Verde'){
        document.getElementById('selecon').style.color = "green";
        document.getElementById('selecon').style.backgroundColor = "green";
        document.getElementById('name').style.setProperty('--div-color-bord','green');
        document.getElementById('boxname').style.setProperty('--div-color-bord','green');
    } 
}