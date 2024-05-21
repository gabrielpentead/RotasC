import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Bem-vindo à página HOME</h1>
            <span>Gabriel Penteado</span>
            <br/>
            
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/conato">Contato</Link>

            <hr/>

            <Link to="/produto">Acessar Produto</Link>
        </div>
    );
}

export default Home;