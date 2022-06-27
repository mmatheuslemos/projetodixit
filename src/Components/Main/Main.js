import { Playertodos } from '../Players/Players';
import './Main.css'

function Main() {

   return (
      <>
         <div className='menuprincipal'>
            <div className='grupo1'>
               <Playertodos numberp={1} />
               <Playertodos numberp={2} />
               <Playertodos numberp={3} />
            </div>
            <div className='grupo2'>
               <Playertodos numberp={4} />
               <Playertodos numberp={5} />
               <Playertodos numberp={6} />
            </div>
         </div>
      </>
   )
}

export default Main;