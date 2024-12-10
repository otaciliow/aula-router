import { Link } from "react-router-dom";

export function Sobre() {
    return(
        <div>
            <h1>Bem vindo à página sobre!</h1>
            <Link to="/">Home</Link><br/>
            <Link to="/contato">Contato</Link>
        </div>
    )
}