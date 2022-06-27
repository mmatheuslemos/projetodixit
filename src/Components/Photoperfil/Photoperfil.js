import React, { Component } from "react";
import './Photoperfil.css'
import { coresdojogador } from "../Action/Add/Buttonadd";

const imageuser = require('./userimage.png');
export class Perfilboard extends Component {
    render() {
        return (
            <>
                <div id={"perfilboard"+(this.props.numer)}>
                        <img src={imageuser} alt='user' id={'imgbd'+(this.props.numer)}></img>
                </div>
            </>
        )
    }
}

export class Photoperfil extends Component {

    state = {
        profileImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png'
    }
    
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
                console.log(coresdojogador[1]);
                if(coresdojogador[this.props.numer]==='vermelho'){
                    const photo = document.querySelectorAll('#imgbd1');
                    for(var i=0;i<31;i++){
                        photo[i].src = reader.result;
                    }
                }
                if(coresdojogador[this.props.numer]==='rosa'){
                    const photo = document.querySelectorAll('#imgbd3');
                    for(var i=0;i<31;i++){
                        photo[i].src = reader.result;
                    }
                }
                if(coresdojogador[this.props.numer]==='azul'){
                    const photo = document.querySelectorAll('#imgbd2');
                    for(var i=0;i<31;i++){
                        photo[i].src = reader.result;
                    }
                }
                if(coresdojogador[this.props.numer]==='amarelo'){
                    const photo = document.querySelectorAll('#imgbd6');
                    for(var i=0;i<31;i++){
                        photo[i].src = reader.result;
                    }
                }
                if(coresdojogador[this.props.numer]==='preto'){
                    const photo = document.querySelectorAll('#imgbd4');
                    for(var i=0;i<31;i++){
                        photo[i].src = reader.result;
                    }
                }
                if(coresdojogador[this.props.numer]==='verde'){
                    const photo = document.querySelectorAll('#imgbd5');
                    for(var i=0;i<31;i++){
                        photo[i].src = reader.result;
                    }
                }
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    render() {
        const { profileImg } = this.state
        return (
            <>
                <div id={"photoperfil" + (this.props.numer)}>
                    <label id={'filebutton' + (this.props.numer)} for={'input' + (this.props.numer)}>
                        <img src={profileImg} alt='user' id={'img'+(this.props.numer)}></img>
                    </label>
                </div>
                <input type='file' name="photo" id={'input' + (this.props.numer)} accept="image/*" onChange={this.imageHandler}></input>
            </>
        )
    }
}




