import "./home.css"

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
            </main>
        </div>
    )
}