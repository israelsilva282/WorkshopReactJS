import "./home.css";
import { Social } from "../../components/Social";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Israel Costa e Silva</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="https://www.instagram.com/israelc282/" target="_blank">
            <p className="link-text">Instagram</p>
          </a>
        </section>

        <footer>

          <Social url="https://github.com/israelsilva282">
            <FaGithub size={35} color="#FFF" />
          </Social>

          <Social url="https://www.linkedin.com/in/israel-costa-6b282321b/">
            <FaLinkedinIn size={35} color="#FFF" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
