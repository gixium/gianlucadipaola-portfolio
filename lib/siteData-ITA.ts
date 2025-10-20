import { GraduationCap, Briefcase, Code, Award, 
    //  Github, Linkedin, Mail, Download 
     Hand as Hello, LibraryBig as Studies, Lightbulb as Idea, Target as Aim,
     UserRound,
    } from "lucide-react"

export const landing = [
{ title: "Gianluca Di Paola", subtitle: "Ingegnere Informatico"},
]

export const navItems = [
{ name: "Chi sono", id: "About", icon: UserRound },
{ name: "Formazione", id: "Education", icon: GraduationCap },
{ name: "Progetti", id: "Projects", icon: Code },
{ name: "Esperienze", id: "Experience", icon: Briefcase },
{ name: "Certificazioni", id: "Certifications", icon: Award },
]
// export const navSocials = [
//   { name: "GitHub", icon: Github, href: "https://github.com/gixium" },
//   { name: "Scarica CV", icon: Download, href: "/gianluca_di_paola_cv.pdf", download: true },
//   { name: "Email", icon: Mail, href: "mailto:ing@gianlucadipaola.com" },
//   { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/gianlucadipaola" },
// ]

export const about = [
{ icon: Hello, 
    text: "Ciao, sono Gianluca. Sono un ingegnere e uno studente di Laurea Magistrale in Ingegneria Informatica presso il Politecnico di Milano."},
{ icon: Studies, 
    text: "La tecnologia mi appassiona da sempre, soprattutto per le sue diverse applicazioni possibili; propio per questo cerco sempre di espandere le mie conoscenze e di restare aggiornato sul panorama attuale. In tal senso, la laurea triennale al PoliMi mi ha fornito delle solide competenze in ingegneria, informatica, matematica ed elettronica."},
{ icon: Idea, 
    text: "Stare a contatto con i migliori professionisti nel proprio campo mi ha ispirato ad approfondire tematiche legate sia all'informatica che all'ingegneria, strizzando l'occhio al mondo del business e del management. Oltre alla tecnologia, sono molto interessato alla scienza in generale e a ciò che trovo curioso, cercando sempre di rimanere aggiornato sulle nuove innovazioni e scoperte."},
{ icon: Aim, 
    text: "Attualmente sono concentrato sui miei studi specialistici in Ingegneria Informatica, ICT, Business e Innovazione. Guardando al futuro, aspiro a lavorare in un contesto che valorizzi al meglio il mio percorso di studi."},
]

export const education = [
{
    title: "Laurea Magistrale in Ingegneria Informatica, ICT, Business e Innovazione",
    description: "Politecnico di Milano",
    contents: ["Attualmente in corso", "Corsi rilevanti: Architetture Avanzate dei Calcolatori, Sicurezza del Software, Sviluppo di App con Flutter, Sistemi Avanzati per Basi di Dati, Ingegneria del Software Avanzata, Valutazione delle Prestazioni, Progettazione di Processi e Servizi in Camunda, Tecnologie per i Sistemi Informativi"],
},
{
    title: "Laurea Triennale in Ingegneria Informatica",
    description: "Politecnico di Milano",
    contents: ["Corsi rilevanti in Informatica: Ingegneria del Software, Programmazione Orientata agli Oggetti, Algoritmi (fondamentali e per la bioinformatica), Strutture Dati, Macchine a Stati Finiti, Software Defined Networking, Database e Progettazione, Architettura dei Calcolatori, Sistemi Operativi, Interazione Uomo-Macchina", "Corsi rilevanti in Ingegneria: Analisi Matematica I e II, Algebra Lineare, Geometria, Fisica, Probabilità e Statistica, Chimica Generale, Automazione, Logica e Algebra, Sistemi Informativi, Economia e Organizzazione Aziendale, Elettronica"],
},
{
    title: "Diploma di Maturità Scientifica",
    description: "LSS Benedetto Croce",
    contents: [],
}
]

export const projects = [
// colori disponibili: teal, purple, blue, red, pink, yellow
{
  title: "Codex Naturalis",
  description: "Programmazione Distribuita Java",
  content: "Progetto di gruppo: sviluppo della versione digitale di un gioco da tavolo fisico, tramite la programmazione distribuita in Java. Ho dotato il gioco di funzionalità avanzate, come la chat dal vivo, la conservazione dello stato di gioco in caso di problemi di rete e altro ancora. Conseguita una valutazione finale di 30/30 con Lode.",
  link: "https://github.com/grecodavide/IS24-AM08",
  badges: ["Java", "JavaFX", "Maven", "TCP", "RMI", "MVC", "GUI/TUI", "IntelliJ IDEA"],
  badgeColor: "yellow",
},
{
  title: "Data Highway",
  description: "Algoritmi e Strutture Dati",
  content: "Progetto individuale: ho sviluppato un programma in C rispettando i limiti di complessità temporale e spaziale assegnati. Implementando le nozioni apprese nel corso del PoliMi, sono riuscito a elaborare strutture dati e algoritmi personalizzati specifici per i casi d'uso, al fine di adattarli al meglio agli scopi specifici. Il mio lavoro mi ha fatto ottenere una valutazione finale di 30/30.",
  link: "https://github.com/gixium",
  badges: ["C", "GCC", "GDB", "Notazione Big-O", "Valgrind", "Unix Shell"],
  badgeColor: "red",
},
{
  title: "Modulo FPGA",
  description: "Progettazione di componenti elettronici",
  content: "Progetto di gruppo: sviluppo e progettazione di un modulo hardware VHDL completamente funzionante, per la sua perfetta integrazione con una RAM. Ottenuto un punteggio di 28/30.",
  link: "https://github.com/gixium/ProgettoRetiLogiche2024/",
  badges: ["FPGA", "Vivado", "Progettazione hardware", "Git"],
  badgeColor: "pink",
},
{
  title: "VentureLabs Flâneur",
  description: "Case study e Progettazione prototipo",
  content: "Progetto di gruppo sui temi dell'Interazione Uomo-Macchina. Dopo la fase di ricerca dal vivo e case study ho seguito il paradigma di User Centered Design, sviluppando il prototipo finale; ho elaborato il prototipo adattandolo alle esigenze emerse con gli utenti target, implementando funzioni studiate ad hoc per un'interazione fluida e senza compromessi. Il progetto ha conseguito una valutazione finale di 29/30.",
  link: "https://github.com/gixium/VentureLabs",
  badges: ["Figma", "UCD", "UX", "HTML", "CSS", "PowerPoint"],
  badgeColor: "blue",
},
{
  title: "gianlucadipaola.com",
  description: "Questo sito web!",
  content: "Ho sviluppato un portfolio personale utilizzando React, NextJS, Tailwind CSS e Shadcn/UI. La struttura del sito è progettata per ridurre al minimo la manutenzione; poiché importa i suoi dati da un file separato, non è necessario rivedere costantemente il codice. Ho posto particolare attenzione al design responsive, alle prestazioni e all'accessibilità.",
  link: "https://github.com/gixium/gianlucadipaola-portfolio/",
  badges: ["React", "NextJS", "Tailwind CSS", "Shadcn/UI", "Lucide-React", "Framer-Motion"],
  badgeColor: "teal",
},
{
  title: "AI Web Navigator",
  description: "Agente AI - Estensione Newelle",
  content: "Progetto di gruppo: sviluppo di un agente AI basato sul modello GPT, in grado di assistere l'utente attraverso siti web fornendo informazioni complete e affidabili. All'utente viene sempre mostrata la pagina web specifica in cui è stata trovata l'informazione, rendendo facile controllare e verificare le risposte dell'AI. Pubblicato come estensione Newelle.",
  link: "https://github.com/gixium/AI-WebNavigator",
  badges: ["Python", "AI", "GPT"],
  badgeColor: "purple",
},
]

export const experiences = [
{
    title: "Agenti AI - Student Tech Clash",
    description: "Reply, EBEC Milano, Best Milano",
    contents: ["Come parte del team finalista classificato al 2° posto della sfida, abbiamo sviluppato un Agente AI in grado di assistere l'utente in complesse attività di ricerca. Abbiamo realizzato una presentazione completa della nostra soluzione e ottenuto un attestato di partecipazione."],
},
{
    title: "TOP: Tutoring Online Program",
    description: "Harvard University, Università Bocconi, Università Bicocca, CIAI",
    contents: ["Ho fornito tutoraggio specializzato a uno studente con difficoltà, adattando la metodologia di apprendimento dei concetti alle esigenze specifiche dello studente. Ho ricevuto un riconoscimento attraverso un open-badge per le competenze e conoscenze acquisite."],
},
{
    title: "Metaverso - Student Tech Clash",
    description: "Reply, EBEC Milano, Best Milano",
    contents: ["Come parte del team finalista della sfida, ho collaborato all'esplorazione del Metaverso, elaborando una presentazione PowerPoint completa sulle sue future applicazioni."],
},
{
    title: "Analisi dell'Acqua e dei Dati con Bioindicatori",
    description: "Regione Sicilia, ICS Maredolce",
    contents: ["Ho guidato il mio team durante il processo di analisi delle acque utilizzando bioindicatori, organizzando e manipolando in modo efficiente i dati in Excel e collaborando efficacemente."],
},
]


export const certifications = [
{
    title: "Inglese C1 - QCER (CAE)",
    description: "CAMBRIDGE ENGLISH",
    content: "Cerftificazione del livello di Inglese Avanzato",
},
// {
//     title: "Inglese B2 QCER (First)",
//     description: "CAMBRIDGE ENGLISH",
//     content: "Inglese di Livello Intermedio Superiore",
// },
// {
//     title: "Inglese B1 QCER (Preliminary)",
//     description: "CAMBRIDGE ENGLISH",
//     content: "Inglese di Livello Intermedio",
// },
]