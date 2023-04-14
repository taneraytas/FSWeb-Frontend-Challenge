import pizza from "../assets/pizza.png";
import imdb from "../assets/imdb_projects.png";
import card from "../assets/card.png";

export const projects = [
  {
    img: pizza,
    tr: {
      name: "Teknolojik Yemekler",
      info: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    },
    en: {
      name: "Tech Foods",
      info: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    },
    tech: ["react", "redux", "axios"],
    links: {
      github: "https://github.com/taneraytas",
      live: "https://pizzaorder.taneraytas.com",
    },
  },

  {
    img: imdb,
    tr: {
      name: "IMDB Veritabanı",
      info: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    },
    en: {
      name: "IMDB Database",
      info: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    },
    tech: ["react", "redux", "axios"],
    links: {
      github: "https://github.com/taneraytas",
      live: "http://fsweb0123.infinityfreeapp.com",
    },
  },
  {
    img: card,
    tr: {
      name: "Sipariş Sepeti",
      info: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    },
    en: {
      name: "Order Cart",
      info: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    },
    tech: ["react", "redux", "axios"],
    links: {
      github: "https://github.com/taneraytas",
      live: "http://project3fsweb2023.epizy.com",
    },
  },
];
