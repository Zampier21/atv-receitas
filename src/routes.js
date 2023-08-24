import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Erro from './Pages/Erro';
import AdicionarReceitas from './Pages/AdicionarReceitas';
import DetalhesReceitas from './Pages/DetalhesReceitas';
import Header from './Components/Header';

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/AdicionarReceitas' element={<AdicionarReceitas/>}/>
            <Route path = '/DetalhesReceitas' element={<DetalhesReceitas/>}/>
            <Route path='*' element = {<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )
}