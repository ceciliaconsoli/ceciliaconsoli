import { Experience } from "./type";
// import i18n, { t } from "i18next";
import { getI18n } from "react-i18next";

const lang = getI18n();
// console.log("lang", lang.language);

export const works: Experience[] = [
  {
    id: "1",
    title: "Front-end developer",
    place: "Be | Shaping the Future",
    years: "2022 - current",
    description: "Sviluppo di piattaforme micro-frontend per clienti in ambito bancario, tramite l'utilizzo di React.js, TypeScript, Next.js e numerosi framework."
      // lang?.language === "ita"
      //   ? "Sviluppo di piattaforme e micro-frontend per clienti in amito bancario, tramite l'utilizzo di React, TypeScript e numerosi framework."
      //   : "test eng",
  },
  {
    id: "2",
    title: "Web designer",
    place: "Datalab - Bicocca Data Science Lab",
    years: "2020 - 2021",
    description:
      "Progettazione e sviluppo del sito web del laboratorio, partendo dalle fasi di analisi e creazione dell'identità del laboratorio fino alla creazione di wireframes e mockup del sito ed infine al suo sviluppo in WordPress. Il progetto è iniziato come tirocinio curriculare correlato al lavoro di tesi, ed è poi proseguito come collaborazione.",
  },
  {
    id: "3",
    title: "Collaborazione studentesca",
    place: "Biblioteca Centrale dell'Università degli Studi di Milano-Bicocca",
    years: "2019",
    description:
      "Attività di relazione con il pubblico presso l'ufficio prestiti della biblioteca centrale dell'università. Collocazione e catalogazione di libri e riviste della biblioteca.",
  },
  {
    id: "4",
    title: "Content editor",
    place: "Associazione Culturale Arena MediaStar",
    years: "2017",
    description:
      "Tirocinio curriculare dove ho svolto il ruolo di content editor per il magazine online dell'associazione, dedicato ai temi di arte e cultura. Mansioni svolte: ricerca ed editing di immagini e scrittura di articoli.",
  },
];
