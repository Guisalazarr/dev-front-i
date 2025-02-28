import { Link } from "react-router-dom"

export default function Navbar () {


    return(
        <ul>
            <li>
                <Link to="/">Página Inicial</Link>
            </li>
            <li>
                <Link to="/about">Sobre</Link>
            </li>
            <li>
            <Link to="/listBooks">Listar da livros</Link>
            </li>
            <li><Link to="/register">Cadastrar</Link>
            </li>
        </ul>

    )
}
