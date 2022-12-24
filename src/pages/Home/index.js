import "./home.css";
import { Social } from "../../components/Social";
import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { doc, collection, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function Home() {
  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});


  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links")
      const queryRef = query(linksRef, orderBy("created", "asc"))
      getDocs(queryRef).then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color
          })
        })
        setLinks(lista)
      })
    }

    loadLinks();
  }, [])

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            whatsapp: snapshot.data().whatsapp,
            instagram: snapshot.data().instagram,
            linkedin: snapshot.data().linkedin,
            github: snapshot.data().github,
          })
        }
      })
    }
    loadSocialLinks();
  }, [])

  return (
    <div className="home-container">
      <h1>Israel Costa e Silva</h1>
      <span>Veja meus links 👇</span>

      <main className="links">

        {links.map((item) => (
          <section key={item.id} className="link-area" style={{ backgroundColor: item.bg }}>
            <a href={item.url} target="_blank">
              <p className="link-text" style={{ color: item.color }}>
                {item.name}
              </p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <h2 style={{ color: "#fff" }}>Meus contatos 👇</h2>
            <div className="footer-icons">

              <Social url={socialLinks?.whatsapp}>
                <FaWhatsapp size={35} color="#FFF" />
              </Social>

              <Social url={socialLinks?.github}>
                <FaGithub size={35} color="#FFF" />
              </Social>

              <Social url={socialLinks?.linkedin}>
                <FaLinkedinIn size={35} color="#FFF" />
              </Social>

              <Social url={socialLinks?.instagram}>
                <FaInstagram size={35} color="#FFF" />
              </Social>
            </div>
          </footer>
        )}
      </main>
    </div >
  );
}
