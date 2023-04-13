import React, { useEffect, useState } from "react";
import { isDarkMode } from "./functions";
import ThemeChanger from "./components/Theme/ThemeChanger";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { languages } from "./data/languages";
import { DataContext } from "./context/DataContext";
import axios from "axios";
import { nanoid } from "nanoid";

export default function App() {
  const [langPre, setLangPre] = useState(localStorage.getItem("lang"));
  const [theme, setTheme] = useState(
    localStorage.theme
      ? localStorage.getItem("theme")
      : isDarkMode() === true
      ? "dark"
      : "light"
  );
  localStorage.setItem("theme", theme);
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("lang", false);
  }, []);

  useEffect(() => {
    const user = {
      anonym: nanoid(64),
      darkMode: theme,
      userLangPref: langPre === true ? "TR" : "EN",
    };
    axios
      .post("https://reqres.in/api/users", user)
      .then((res) =>
        console.log("Kullanıcı Başarı İle Oluşturuldu >> ", res.data)
      )
      .catch((err) =>
        console.log("Kullanıcı Oluşturulurken Hata >> ", err.message)
      );
  }, [localStorage.theme, localStorage.lang]);

  const themeHandler = (e) => {
    setTheme(localStorage.theme === "dark" ? "light" : "dark");
  };

  const langHandler = (e) => {
    setLangPre(!langPre);
    localStorage.setItem("lang", langPre);
  };

  const content = langPre === true ? languages.tr : languages.en;
  const contentProjects = langPre === true ? `tr` : `en`;

  return (
    <DataContext.Provider
      value={{
        content,
        themeHandler,
        theme,
        langPre,
        langHandler,
        contentProjects,
      }}
    >
      <div>
        <div className="max-w-[1440px] m-auto w-[90%] font-Inter ">
          <ThemeChanger />
          <NavBar />
          <Hero />
          <Skills />
          <div>
            <hr className="hrLine" />
          </div>
          <Profile />
          <div>
            <hr className="hrLine divider" />
          </div>
          <Projects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </DataContext.Provider>
  );
}
