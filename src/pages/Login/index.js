import "./login.css"
import { Logo } from "../../components/Logo"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { auth } from "../../services/firebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Campos inválidos");
            return
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success("Bem vindo de volta :)")
                navigate("/admin", { replace: "true" })
            })
            .catch(() => toast.error("Erro ao tentar realizar login"));
    }

    return (
        <div className="login-container">
            <Logo />

            <form className="form-login" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Digite seu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    type="password"
                    placeholder="***********"
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Acessar</button>

            </form>
        </div>
    )
}