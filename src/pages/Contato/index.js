import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Página de Contato</h1>
            <span>42 3621-1031</span>
            <br/>
            
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/">home</Link>

            <hr/>

            <Link to="/produto">Acessar Produto</Link>
        </div>
    );
}

export default Contato;