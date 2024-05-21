import { BrowserRouter, Routes, Rout } from "react-router-dom";

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Rout path="/" element={<Home/>}/>
                <Rout path="/sobre" element={<Sobre/>}/>
                <Rout path="/contato" element={<Contato/>}/>
                <Rout path="/produtos" element={<Produtos/>}/>
                <Rout path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;