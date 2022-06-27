import { useState } from "react"
import { movercoelho, movercoelhoparatras } from "../Action/Start/Buttonstart";
import { Aud } from "../Audio/Audio";
import { Photoperfil } from "../Photoperfil/Photoperfil";
import { Rabbittodos } from "../Rabbits/Rabbits";
import { Ranking } from "../Ranking/Ranking";
import './Players.css'

export var valoresdosjogadores = [];

const videogame = require('../Audio/clickaudio.mp3');

export function Playertodos(props) {

    const [pointsatual, pointsnovo] = useState(0);

    function Addpoints() {
        if (pointsatual < 30) {
            pointsnovo(pointsatual + 1);
            valoresdosjogadores[props.numberp] = pointsatual + 1;
            console.log(valoresdosjogadores[props.numberp]);
        }
    }

    function Removepoints() {
        if (pointsatual > 0) {
            pointsnovo(pointsatual - 1);
            valoresdosjogadores[props.numberp] = pointsatual - 1;
            console.log(valoresdosjogadores[props.numberp]);
        }
    }

    return (
        <>
            <div id={"playerjogador" + (props.numberp)} className={'player' + (props.numberp)}>
                <div className={'regiperfil' + (props.numberp)}>
                    <Rabbittodos numbr={props.numberp} />
                </div>
                <div className={'infojogo' + (props.numberp)}>
                    <Photoperfil numer={props.numberp} />
                    <div id={"containerinfouser"+(props.numberp)}>
                        <h1 id={'nameperfil' + (props.numberp)}> </h1>
                        <div id='pontuaca'>
                            <h3 id={"clasif" + (props.numberp)}> </h3>
                            <h3 id={"rankingplayer" + (props.numberp)}> </h3>
                        </div>
                        <div id="pontuaca">
                            <h2 id={"ponto" + (props.numberp)}> </h2>
                            <h2 id={"pontrank" + (props.numberp)}>{pointsatual}</h2>
                        </div>
                        <div id="botoesdeponto">
                            <audio id="audio" src={videogame}></audio>
                            <button onClick={() => { Addpoints(); movercoelho(); Ranking(); Aud() }} id={"buttonpoint"+(props.numberp)}>+</button>
                            <button onClick={() => { Removepoints(); movercoelhoparatras(); Ranking(); Aud() }} id={"buttonpointdir"+(props.numberp)}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


