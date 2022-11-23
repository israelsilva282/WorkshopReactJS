import "./home.css"

import { Social } from "../../components/Social"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Israel Costa e Silva</h1>
            <span>Veja meus links 👇</span>

            <main className="links">
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Link do Telegram</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Link do WhatsApp</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Link do GitHub</p>
                    </a>
                </section>

                <footer>
                    <Social url="https://github.com/israelsilva282">
                        <FaGithub size={35} color="#FFF" />
                    </Social>

                    <Social url="https://www.linkedin.com/in/israel-costa-6b282321b/">
                        <FaLinkedin size={35} color="#FFF" />
                    </Social>

                    <Social url="https://www.instagram.com/israelc282/">
                        <FaInstagram size={35} color="#FFF" />
                    </Social>

                </footer>

            </main>
        </div>
    )
}