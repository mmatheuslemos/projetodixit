import React from "react";
import './Rabbits.css'

export function Rabbittodos(props) {
    return (
        <>
            <div id={"rabbitears"+(props.numbr)} className="rabbit">
                <div className="ears">
                    <div id={'rabbitear'+(props.numbr)} className="ear"></div>
                    <div id={'rabbitear'+(props.numbr)+'2'} className="ear"></div>
                </div>
                <div id={'rabbithead'+(props.numbr)} className="head">
                    <div className="face">
                        <div className="eyes">
                            <div id={'rabbiteye'+(props.numbr)} className="eye"></div>
                            <div id={'rabbiteye'+(props.numbr)+'2'} className="eye"></div>
                        </div>
                        <div className="nose"></div>
                        <div className="mouth">X</div>
                    </div>
                </div>
                <div id={'rabbitbody'+(props.numbr)} className="body">
                    <div className="paws">
                        <div className="paw"></div>
                        <div className="paw"></div>
                    </div>
                </div>
                <div className="feet">
                    <div id={'rabbitfootleft'+(props.numbr)} className="foot-left"></div>
                    <div id={'rabbitfootright'+(props.numbr)} className="foot-right"></div>
                </div>
            </div>
        </>
    )
}

