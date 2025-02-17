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
    { icon: Hello, 
        text: "Hi, I'm Gianluca. I'm a student of a Master's Degree in Computer Engineering, here at the Polytechnic University of Milan."},
    { icon: Studies, 
        text: "Being very passionate about technology and innovation, I thrive on continuously expanding my knowledge. My bachelor's degree at PoliMi has provided me with strong foundations in engineering, computer science, mathematics and electronics."},
    { icon: Idea, 
        text: "Being in contact with passionate professionals has inspired me to dive deeper into Computer Science and Engineering topics, while also keeping myself open to the world of Business and Management. Beyond technology, I am deeply interested in science in general and other curious topics; this is why I always try to stay up-to-date with new innovations and discoveries."},
    { icon: Aim, 
        text: "My current focus is directed towards completing my studies in Computer Engineering, ICT Engineering, Business and Innovation. Looking ahead, I aspire to find myself working for a company that best suits my studies."},
]

export const education = [
    {
        title: "Master of Science Degree in Computer Engineering, ICT, Business and Innovation",
        description: "Polytechnic University of Milan",
        contents: ["Currently attending"],
    },
    {
        title: "Bachelor of Science Degree in Engineering Of Computing Systems",
        description: "Polytechnic University of Milan",
        contents: ["Relevant Coursework (informatics): Software Engineering, Object-Oriented Programming, Algorithms (fundamental and for bioinformatics), Data Structures, Finite State Machines, Software Defined Networking, Databases and Design, Computer Architecture, Operating Systems, Human-Computer Interaction", "Relevant Coursework (engineering): Calculus I & II, Linear Algebra, Geometry, Physics, Probability & Statistics, General Chemistry, Automation, Logic & Algebra, Information Systems, Business Economics & Organization, Electronics"],
    },
    {
        title: "High School Diploma in Scientific Studies",
        description: "LSS Benedetto Croce",
        contents: [],
    }
]

export const projects = [
    // colori disponibili: teal, purple, blue, red, pink, yellow
    {
      title: "Codex Naturalis",
      description: "Java Distributed Programming",
      content: "Team project: developed the digital version of a physical board game. We implemented it using Java Distributed Prgramming; we provided the game with advanced funcionalities, such as the live chat, the game preservation in case of network problems, et al. Our work earned us a final grade of 30/30 cum Laude.",
      link: "https://github.com/grecodavide/IS24-AM08",
      badges: ["Java", "JavaFX", "Maven", "TCP", "RMI", "MVC", "GUI/TUI", "IntelliJ IDEA"],
      badgeColor: "yellow",
    },
    {
      title: "Data Highway",
      description: "Algorithms and Data Structures",
      content: "Solo project: I developed a C program respectful of the given time and memory complexity limits. Implementing the notions learned in the PoliMi course, I was able to elaborate custom case-specific data structures and algorithms to best fit the specific purposes. My work earned me a final score of 30/30.",
      link: "https://github.com/gixium",
      badges: ["C", "GCC", "GDB", "Big-O notation", "Valgrind", "Unix Shell"],
      badgeColor: "red",
    },
    {
      title: "FPGA Module",
      description: "Design of electronic component",
      content: "Team project: developed and designed a fully functional VHDL hardware module, for its seamless integration with a RAM. Earned a score of 28/30.",
      link: "https://github.com/gixium/ProgettoRetiLogiche2024/",
      badges: ["FPGA", "Vivado", "Hardware design", "Git"],
      badgeColor: "pink",
    },
    {
      title: "VentureLabs Flâneur",
      description: "Case study and Prototype design",
      content: "Team project on the topics of Human-Computer Interaction. After the research phase and case study we followed the User Centered Design paradigm, developing the final prototype. Earned a final score of 29/30.",
      link: "https://github.com/gixium/VentureLabs",
      badges: ["Figma", "UCD", "UX", "HTML", "CSS", "PowerPoint"],
      badgeColor: "blue",
    },
    {
      title: "gianlucadipaola.com",
      description: "This website!",
      content: "I developed a personal porfolio using React, NextJS, Tailwind CSS, Shadcn/UI. The structure of the website is designed to minimise maintenance; since it imports its data from a standalone file, there is no need to constantly review the code. I put a particular focus on responsive design, performance and accessibility.",
      link: "https://github.com/gixium/gianlucadipaola-portfolio/",
      badges: ["React", "NextJS", "Tailwind CSS", "Shadcn/UI", "Lucide-React", "Framer-Motion"],
      badgeColor: "teal",
    },
    {
      title: "AI Web Navigator",
      description: "AI Agent - Newelle extension",
      content: "Group project: developed an AI agent based on the GPT model, capable of assisting the user through websites providing complete and reliable information. The user is always shown the specific webpage the piece of information was found on, making it easy to double check and verify AI's answers. Published it as Newelle extension.",
      link: "https://github.com/gixium/AI-WebNavigator",
      badges: ["Pythredon", "AI", "GPT"],
      badgeColor: "purple",
    },
]

export const experiences = [
    {
        title: "AI Agents - Student Tech Clash",
        description: "Reply, EBEC milano, Best Milano",
        contents: ["As part of the 2nd placed finalist team of the challenge, we developed an AI Agent capable of assisting the user with complex search tasks. We crafted a comprehensive presentation of our solution and earned a certificate of attendance."],
    },
    {
        title: "TOP: Tutoring Online Program",
        description: "Harvard University, Bocconi University, Bicocca University, CIAI",
        contents: ["I provided specialized tutoring to a student with difficulties, tailoring it to the student's needs. Earned recognition through an awarded open-badge for the acquired skills and knowledge."],
    },
    {
        title: "Metaverse - Student Tech Clash",
        description: "Reply, EBEC milano, Best Milano",
        contents: ["As part of the finalist team of the challenge, I collaborated on Metaverse exploration event, crafting a comprehensive PowerPoint on its future applications."],
    },
    {
        title: "Water and Data Analysis with Bioindicators",
        description: "Sicily Region, ICS Maredolce",
        contents: ["I led my team during the water analysis process using bioindicators, proficiently organizing and manipulating data in Excel while collaborating effectively."],
    },
]


export const certifications = [
    {
        title: "C1 CEFR English (CAE)",
        description: "CAMBRIDGE ENGLISH",
        content: "Advanced English",
    },
    // {
    //     title: "B2 CEFR English (First)",
    //     description: "CAMBRIDGE ENGLISH",
    //     content: "Upper Intermediate English",
    // },
    // {
    //     title: "B1 CEFR English (Preliminary)",
    //     description: "CAMBRIDGE ENGLISH",
    //     content: "Intermediate English",
    // },
]