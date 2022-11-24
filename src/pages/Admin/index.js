import "./admin.css";

import { useState } from "react"
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";

import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi"
import { db } from "../../services/firebaseConnection"
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"

export default function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1")
  const [textColorInput, setTextColorInput] = useState("121212")

  async function handleRegister(e) {
    e.preventDefault();

    if (nameInput === "" || urlInput === "") return toast.warn("Preencha todos os campos");

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("")
        setUrlInput("")
      })
      .catch((e) => {
        toast.error("Erro ao salvar o link")
      })

  }
  return (
    <div className="admin-container">
      <Header />

      <Logo />

      <form className="form" onSubmit={handleRegister}>
        <label className="label">Nome do link</label>
        <Input placeholder="Nome do link" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />

        <label className="label">URL do link</label>
        <Input type="url" placeholder="Digite a URL do link" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />

        <section className="container-colors">
          <div>
            <label className="label right">Fundo do link</label>
            <input type="color" value={backgroundColorInput} onChange={(e) => setBackgroundColorInput(e.target.value)} />
          </div>

          <div>
            <label className="label right">Cor do link</label>
            <input type="color" value={textColorInput} onChange={(e) => setTextColorInput(e.target.value)} />
          </div>
        </section>

        {nameInput != "" && (
          <div className="preview animate-pop">
            <label className="label">Veja como está ficando 👇</label>
            <article className="list" style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput }}>
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button className="btn-register" type="submit">
          Cadastrar <MdAddLink size={24} color="#FFF " />
        </button>
      </form>

      <h2 className="title">
        Meus links
      </h2>

      <article className="list animate-pop"
        style={{ backgroundColor: "#" }}>
        <p>Grupo exclusivo no Telegram</p>
        <div>
          <button className="btn-delete"><FiTrash2 /></button>
        </div>
      </article>

    </div>
  );
}
