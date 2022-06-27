import Buttonadd from '../Action/Add/Buttonadd';
import Buttonremove from '../Action/Remove/Buttonremove';
import Buttonstart from '../Action/Start/Buttonstart';
import { changecolor } from '../Action/Changecolor/Changecolor';
import '../Sidebar/Sidebar.css';
const dixitlogo = require('./Logo/Dixit-Logo.png');


function Sidebar() {
    return (
        <>
            <div className='sidebar'>
                <div className='players'>
                    <div className='titulo'>
                        <img src={dixitlogo} id='imageperfildix' alt='logodixit' />
                    </div>
                    <div id='name'>
                        <div className='addinforme'>
                            <input id='boxname' type='text'></input>
                            <select id='selecon' onChange={changecolor}>
                                <option id='vermelho' className='option1'>Vermelho</option>
                                <option id='azul' className='option2'>Azul</option>
                                <option id='rosa' className='option3'>Rosa</option>
                                <option id='preto' className='option4'>Preto</option>
                                <option id='amarelo' className='option5'>Amarelo</option>
                                <option id='verde' className='option6'>Verde</option>
                            </select>
                        </div>
                    </div>
                    <div id='botoes'>
                        <Buttonremove />
                        <Buttonadd />
                    </div>
                    <Buttonstart />
                </div>
            </div>
        </>
    )
}



export default Sidebar;