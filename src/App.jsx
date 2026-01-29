import React, { useState } from "react";
import logo from "./assets/logo.jpg";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState("home");

  const handleLogin = () => {
    if (login === "gmail" && password === "0000") {
      setIsAuth(true);
      setError("");
    } else {
      setError("Login yoki parol xato!");
    }
  };

  const handleLogout = () => {
    setIsAuth(false);
    setLogin("");
    setPassword("");
    setPage("home");
  };

  /* 🔐 LOGIN PAGE */
  if (!isAuth) {
    return (
      <div className="login-page">
        <div className="login-box">
          <h2>Admin Login</h2>

          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button onClick={handleLogin}>Kirish</button>
        </div>
      </div>
    );
  }

  /* ✅ ADMIN PANEL */
  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-left">
          <img src={logo} alt="logo" />
          <span>Admin</span>
        </div>

        <div className="topbar-right">
          <button className="logout-btn" onClick={handleLogout}>
            Chiqish
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className="body">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <ul>
            <li
              className={page === "home" ? "active" : ""}
              onClick={() => setPage("home")}
            >
              Home
            </li>
            <li
              className={page === "project" ? "active" : ""}
              onClick={() => setPage("project")}
            >
              Project
            </li>
            <li
              className={page === "friends" ? "active" : ""}
              onClick={() => setPage("friends")}
            >
              Mening dostlarim
            </li>
          </ul>
        </aside>

        {/* CONTENT */}
        <main className="content">
          {/* HOME */}
          {page === "home" && (
            <div className="contint-box">
              <h1>Men haqimda</h1>
              <p>
                Men Xikmatov Jahongir, 2010 yil 10 avgustda Toshkent viloyati
                Yangiyol shahrida tug‘ilganman. Hozirda{" "}
                <a href="https://www.it-time-academy.uz/" target="_blank" rel="noreferrer">
                  IT Time Academy
                </a>{" "}
                da o‘qiyapman. 6-umumiy o‘rta ta’lim maktabida 9-sinf o‘quvchisiman.
              </p>
              <p>
                <strong>Qiziqishlarim:</strong> futbol, dasturlash, web dizayn,
                o‘yinlar, musiqa tinglash.
              </p>
            </div>
          )}

          {/* PROJECT */}
          {page === "project" && (
            <div className="contint-box project-grid">
              <h1>Projectlarim</h1>
              <div className="projects">
                <a href="https://di-z4up.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Discover Invest</h2>
                  <p>Mening Discover Invest loyiham</p>
                </a>

                <a href="https://react-bot-fvy5.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>React Bot</h2>
                  <p>Aloqaga chiqish uchun bot</p>
                </a>

                <a href="https://greenshop-tau-coral.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>GreenShop</h2>
                  <p>Mening GreenShop loyiham</p>
                </a>

                <a href="https://figma-one-steel.vercel.app" target="_blank" rel="noreferrer" className="project-card">
                  <h2>One Steel</h2>
                  <p>Figma asosida yaratilgan loyiha</p>
                </a>

                <a href="https://imtixon-johongir.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Master Story</h2>
                  <p>Mening Master Story loyiham</p>
                </a>

                <a href="https://pojof-r6ry.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>POJOF</h2>
                  <p>Mening POJOF loyiham</p>
                </a>
              </div>
            </div>
          )}

          {/* FRIENDS */}
          {page === "friends" && (
            <div className="contint-box project-grid">
              <h1>Mening dostlarim</h1>
              <div className="projects">
                <a href="https://www.instagram.com/khayrullayev.l/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Xayrullayev Ibroxim</h2>
                  <p>Instagram: khayrullayev.l</p>
                </a>

                <a href="https://www.instagram.com/i.annvarov/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Anvarov Islom</h2>
                  <p>Instagram: i.annvarov</p>
                </a>

                <a href="https://www.instagram.com/abdullaziz705_/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Sayfullayev Abdulaziz</h2>
                  <p>Instagram: abdullaziz705_</p>
                </a>

                <a href="https://www.instagram.com/abdulloh_umidovich/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Abdulloh Umidovich</h2>
                  <p>Instagram: abdulloh_umidovich</p>
                </a>

                <a href="https://www.instagram.com/komi_la571_developer/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Komila Habziddinova</h2>
                  <p>Instagram: komi_la571_developer</p>
                </a>

                <a href="https://www.instagram.com/thesevara.a/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Sevara</h2>
                  <p>Instagram: thesevara.a</p>
                  <p>
                    GitHub:{" "}
                    <a href="https://github.com/sevaradevoloper" target="_blank" rel="noreferrer">
                      sevaradevoloper
                    </a>
                  </p>
                </a>

                <a href="https://www.instagram.com/mirjalol.mirqobilov/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Mirjalol Mir Qobilov</h2>
                  <p>Instagram: mirjalol.mirqobilov</p>
                  <p>
                    GitHub:{" "}
                    <a href="https://github.com/jomiy191-arch" target="_blank" rel="noreferrer">
                      jomiy191-arch
                    </a>{" "}
                    |{" "}
                    <a href="https://github.com/M-Mirjalol" target="_blank" rel="noreferrer">
                      M-Mirjalol
                    </a>
                  </p>
                </a>

                <a href="https://www.instagram.com/_rozmatov_07_/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Rozmatov Abduraxmon</h2>
                  <p>Instagram: _rozmatov_07_</p>
                  <p>
                    GitHub:{" "}
                    <a href="https://github.com/jomiy191-arch" target="_blank" rel="noreferrer">
                      jomiy191-arch
                    </a>
                  </p>
                </a>

                <a href="https://www.instagram.com/aceracerov67/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Farzona</h2>
                  <p>Instagram: aceracerov67</p>
                  <p>
                    GitHub:{" "}
                    <a href="https://github.com/hash" target="_blank" rel="noreferrer">
                      hash
                    </a>
                  </p>
                </a>

                <a href="https://www.instagram.com/xafizzafarov44/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Xafiz</h2>
                  <p>Instagram: xafizzafarov44</p>
                  <p>
                    GitHub:{" "}
                    <a href="https://github.com/sudo" target="_blank" rel="noreferrer">
                      sudo
                    </a>
                  </p>
                </a>

                <a href="https://www.instagram.com/nurdavlet/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Nurdavlet</h2>
                  <p>Instagram: nurdavlet</p>
                  <p>
                    GitHub:{" "}
                    <a href="https://github.com/Nurik-04" target="_blank" rel="noreferrer">
                      Nurik-04
                    </a>
                  </p>
                </a>

                <a href="https://www.instagram.com/direct/t/17847355490812550/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Valijonov Azizbek</h2>
                  <p>Instagram: valijonov azizbek</p>
                </a>

                <a href="https://www.instagram.com/mamadjonovv_/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Mamadjonov Begzod</h2>
                  <p>Instagram: mamadjonovv_</p>
                </a>

                <a href="https://www.instagram.com/odilovsss17/" target="_blank" rel="noreferrer" className="project-card">
                  <h2>Odilov Yaxyo</h2>
                  <p>Instagram: odilovsss17</p>
                </a>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
