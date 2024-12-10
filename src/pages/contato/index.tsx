import { Link } from "react-router-dom";

export function Contato() {
    return(
        <div>
            <h1>Bem vindo à página contato!</h1>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}