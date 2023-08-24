import './header.css';
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <Link className="logo link-invisivel" to="/">Receitas Facil</Link>
            <Link className="Adicionar"to="/AdicionarReceitas">Adicionar Receitas</Link>
        </header>
    )
}