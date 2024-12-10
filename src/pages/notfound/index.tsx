import { Link } from 'react-router-dom';

export function NotFound() {
    return(
        <div>
            <h1>Ops, essa página não existe!</h1>
            <h2>Código: 404</h2>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    )
}