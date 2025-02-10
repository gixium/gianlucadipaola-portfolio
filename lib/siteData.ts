import { GraduationCap, Briefcase, Code, Award, 
        //  Github, Linkedin, Mail, Download 
         Hand as Hello, LibraryBig as Studies, Lightbulb as Idea, Target as Aim,
         UserRound,
        } from "lucide-react"

export const navIndex = [
  { name: "About", icon: UserRound },
  { name: "Education", icon: GraduationCap },
  { name: "Projects", icon: Code },
  { name: "Experience", icon: Briefcase },
  { name: "Certifications", icon: Award },
]
// export const navSocials = [
//   { name: "GitHub", icon: Github, href: "https://github.com/gixium" },
//   { name: "Download CV", icon: Download, href: "/gianluca_di_paola_cv.pdf", download: true },
//   { name: "Email", icon: Mail, href: "mailto:ing@gianlucadipaola.com" },
//   { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/gianlucadipaola" },
// ]

export const about = [
    { icon: Hello, text: "Hi! I'm Gianluca, a 3rd year Computer Engineering student at the Polytechnic University of Milan."},
    { icon: Studies, text: "Hi! I'm Gianluca, a 3rd year Computer Engineering student at the Polytechnic University of Milan."},
    { icon: Idea, text: "Hi! I'm Gianluca, a 3rd year Computer Engineering student at the Polytechnic University of Milan."},
    { icon: Aim, text: "Hi! I'm Gianluca, a 3rd year Computer Engineering student at the Polytechnic University of Milan."},
]

export const education = [
    {
        title: "Titolo di studio",
        description: "Ente erogatore",
        contents: ["GPA 4.0/4.0", "Data di conseguimento", "Relevant coursework: analisi, fisica, ..."],
    },
    {
        title: "Titolo di studio",
        description: "Ente erogatore",
        contents: ["GPA 4.0/4.0", "Data di conseguimento", "Relevant coursework: analisi, fisica, ..."],
    }
]

export const projects = [
    // colori disponibili: teal, purple, blue, red, pink
    {
      title: "Project Title",
      description: "Subtitle (brief description)",
      content: "Long description",
      link: "https://github.com/boh/smart-home-iot",
      badges: ["React", "Node.js", "IoT", "Raspberry Pi"],
      badgeColor: "blue",
    },
    {
      title: "Project Title",
      description: "Subtitle (brief description)",
      content: "Long description",
      link: "https://github.com/boh/ai-chess-engine",
      badges: ["Python", "TensorFlow", "Chess", "AI"],
      badgeColor: "pink",
    },
    {
      title: "Project Title",
      description: "Subtitle (brief description)",
      content: "Long description",
      link: "https://github.com/boh/project3",
      badges: ["Badge1", "Badge2", "Badge3"],
      badgeColor: "red",
    },
]

export const experiences = [
    {
        title: "Esperienza",
        description: "Enti organizzatori",
        contents: ["punto 1", "punto 2"],
    },
    {
        title: "Esperienza",
        description: "Enti organizzatori",
        contents: ["punto 1", "punto 2"],
    },
    {
        title: "Esperienza",
        description: "Enti organizzatori",
        contents: ["punto 1", "punto 2"],
    },
]


export const certifications = [
    {
        title: "Certification title",
        description: "Ente di rilascio",
        content: "Descrizione/data di rilascio",
    },
    {
        title: "Certification title",
        description: "Ente di rilascio",
        content: "Descrizione/data di rilascio",
    },
    {
        title: "Certification title",
        description: "Ente di rilascio",
        content: "Descrizione/data di rilascio",
    },
]