import { useParams } from "react-router-dom"

export function Produto() {

    const { id } = useParams();

    return (
        <div>
            <h1>Este é o produto {id}</h1>
        </div>
    )
}