import './App.css';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Board from '../Board/Board';
function App() {

   return(
    <>
    <div className='container'>
        <Sidebar></Sidebar>
        <Main></Main>
    </div>
        <Board></Board>
    </>
   )
}

export default App;