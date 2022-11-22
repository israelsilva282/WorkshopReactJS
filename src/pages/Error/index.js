import "./erro.css"
import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"

export default function Error() {
    return (
        <div className="error">
            <Logo />
            <h1>Página não encontrada</h1>
            <p>A página que está tentando acessar não existe</p>
            <Link className="link" to="/">Voltar</Link>
        </div>
    )
}