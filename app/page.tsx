"use client"

import { navIndex, about, education, projects, certifications, experiences } from "@/lib/siteData"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  Award, 
  Github, 
  Linkedin, 
  Mail, 
  Sun, 
  Moon, 
  FileDown as Download,
  ChevronLeft,
  ChevronRight,
  X, 
  // Star,
  // ChevronDown,
  // User,
  // Smile,
  // BookText,
  // Idea,
  // Target,
   } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import type React from "react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLandingPage, setIsLandingPage] = useState(true)
  const [isGridView, setIsGridView] = useState(false)

  useEffect(() => {
    // Check user's color scheme preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(prefersDarkMode)

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches)
    mediaQuery.addListener(handleChange)

    return () => mediaQuery.removeListener(handleChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsLandingPage(scrollPosition < 100) // Adjust this value as needed
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleView = () => {
    setIsGridView((prev) => !prev)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80 // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      window.history.replaceState(null, "", `#${id}`)
    }
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false, slidesToScroll: 1 }, [WheelGesturesPlugin({ forceWheelaxis: X }), Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 pt-20 ${isLandingPage ? "landing-page" : ""}`}
    >
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none navbar-container">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-start">
          {/* Projects Navbar (Top on mobile, Left on desktop) */}
          <nav className="pointer-events-auto w-full md:w-auto mb-4 md:mb-0">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full shadow-lg p-2 transition-colors">
            {/* Glass gradient effect */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 opacity-5 dark:opacity-10 bg-f rounded-full"></div>
              <ul className="flex justify-center md:justify-start space-x-4">
                {navIndex.map((item) => (
                  <li key={item.name}>
                    <a
                      href={`#${item.name.toLowerCase()}`}
                      onClick={(e) => handleSmoothScroll(e, item.name.toLowerCase())}
                      className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors p-2 rounded-full block"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-5 w-5"/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Social Links Navbar (Bottom on mobile, Right on desktop) */}
          <nav className="pointer-events-auto w-full md:w-auto fixed bottom-0 left-0 right-0 md:static navbar-container-bottom">
            <div className="container mx-auto px-4">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full shadow-lg p-2 mb-4 md:mb-0 transition-colors">
              {/* Glass gradient effect */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 opacity-5 dark:opacity-10 bg-f rounded-full"></div>

                <ul className="flex justify-center space-x-4">
                  <li>
                    <a
                      href="https://github.com/gixium"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors p-2 rounded-full block"
                    >
                      <span className="sr-only">GitHub</span>
                      <Github className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/app/public/gianluca_di_paola_cv.pdf"
                      download="gianluca_di_paola_cv.pdf"
                      className="text-gray-600 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors p-2 rounded-full block"
                    >
                      <span className="sr-only">Download CV</span>
                      <Download className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:ing@gianlucadipaola.com"
                      className="text-gray-600 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors p-2 rounded-full block"
                    >
                      <span className="sr-only">Email</span>
                      <Mail className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/gianlucadipaola"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors p-2 rounded-full block"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={toggleDarkMode}
                      className="text-gray-600 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors rounded-full"
                    >
                      <span className="sr-only">Toggle theme</span>
                      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 opacity-20 dark:opacity-20 bg-f"></div>
          {/* Background image */}
          {/* <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5"></div> */}
          {/* Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent dark:from-slate-900" />
        </div>
        <motion.div
          className="z-10 text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100 titolo-1">Gianluca Di Paola</h1>
          <p className="text-xl md:text-2xl mb-8 uppercase tracking-wide text-gray-700 dark:text-gray-300 sottotitolo">
            Software Engineering Student
          </p>
          <div className="flex justify-center space-x-4">
            <div className="contenitore mx-auto px-4">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full shadow-lg p-2 mb-4 md:mb-0 transition-colors hover:bg-violet-100 dark:hover:bg-purple-900">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 opacity-5 dark:opacity-30 bg-f rounded-full"></div>
                  <a href="#education" onClick={(e) => handleSmoothScroll(e, "start")}>
                    <strong className="uppercase font-medium">
                      Explore My Work
                    </strong>
                  </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/*! Start section  */}
      <div className="start" id="start"> </div>

      <main className="container mx-auto px-4 py-16 space-y-32">

        {/* About Section */}
        <motion.section
          id="about"
          className="scroll-mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200">
            {/* <Star className="mr-2" /> */}
            About me
          </h2>
          <div className="grid grid-rows-1 md:grid-rows-2 gap-6">
            {about.map((item, index) => (
              <div key={index} className="flex items-center justify-normal pl-4 pr-4">
                <item.icon className="mr-4 !min-w-6 !min-h-6" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.section>


        {/* Education Section */}
        <motion.section
          id="education"
          className="scroll-mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200">
            <GraduationCap className="mr-2" />
            Education
          </h2>
          <div className="grid grid-rows-1 md:grid-rows-2 gap-6">
            {education.map((education, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">
                      {education.title}
                    </CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400">
                      {education.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-700 dark:text-gray-300">
                    {education.contents.map((value, index) => 
                      <p key={index} className="{index}==5?font-bold">{value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="scroll-mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold flex items-center text-gray-800 dark:text-gray-200">
              <Code className="mr-2" />
              Projects
            </h2>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <motion.button
                onClick={toggleView}
                className="flex items-center space-x-1 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <span className="font-semibold ml-4">{isGridView ? "view carousel" : "view grid"}</span>
                {/* <ChevronDown className={`h-4 w-4 transform transition-transform ${isGridView ? "rotate-180" : ""}`} /> */}
              </motion.button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {isGridView ? (
              <motion.div
                key={isGridView ? "grid" : "carousel"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                      <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                        <CardHeader>
                          <CardTitle>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-800 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                              {project.title}
                            </a>
                          </CardTitle>
                          <CardDescription className="uppercase text-gray-600 dark:text-gray-400">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-gray-700 dark:text-gray-300">
                          <p className="mb-4">{project.content}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.badges.map((badge, badgeIndex) => (
                              <Badge
                                key={badgeIndex}
                                variant="secondary"
                                // className={`bg-${project.badgeColor}-100 text-${project.badgeColor}-800 dark:bg-${project.badgeColor}-900 dark:text-${project.badgeColor}-200`}
                                className={`
                                        ${project.badgeColor === "teal" ? "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" : ""}
                                        ${project.badgeColor === "purple" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" : ""}
                                        ${project.badgeColor === "blue" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : ""}
                                        ${project.badgeColor === "red" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : ""}
                                        ${project.badgeColor === "pink" ? "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" : ""}
                                `}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={isGridView ? "grid" : "carousel"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative px-12">
                  <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex">
                      {projects.map((project, index) => (
                        <div key={index} className="flex-[0_0_50%] min-w-0 pl-4">
                          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                            <Card className="bg-white dark:bg-gray-800 shadow-md h-full transition-colors">
                              <CardHeader>
                                <CardTitle>
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                                  >
                                    {project.title}
                                  </a>
                                </CardTitle>
                                <CardDescription className="uppercase text-gray-600 dark:text-gray-400">
                                  {project.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="text-gray-700 dark:text-gray-300">
                                <p className="mb-4">{project.content}</p>
                                <div className="flex flex-wrap gap-2">
                                  {project.badges.map((badge, badgeIndex) => (
                                    <Badge
                                      key={badgeIndex}
                                      variant="secondary"
                                      // className={`bg-${project.badgeColor}-100 text-${project.badgeColor}-800 dark:bg-${project.badgeColor}-900 dark:text-${project.badgeColor}-200`}
                                      className={`
                                        ${project.badgeColor === "teal" ? "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" : ""}
                                        ${project.badgeColor === "purple" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" : ""}
                                        ${project.badgeColor === "blue" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : ""}
                                        ${project.badgeColor === "red" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : ""}
                                        ${project.badgeColor === "pink" ? "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" : ""}
                                      `}
                                    >
                                      {badge}
                                    </Badge>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                    <div> </div>
                  </div>
                  <Button
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 dark:bg-gray-800/70 dark:hover:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 z-10 rounded-full"
                    size="icon"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 dark:bg-gray-800/70 dark:hover:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 z-10 rounded-full"
                    size="icon"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="scroll-mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200">
            <Briefcase className="mr-2" />
            Experience
          </h2>
          <div className="grid grid-rows-1 md:grid-rows-2 gap-6">
            {experiences.map((experience, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">{experience.title}</CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400">
                      {experience.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      {experience.contents.map((content, idx) => (
                        <li key={idx}>{content}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          className="scroll-mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200">
            <Award className="mr-2" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">
                      {certification.title}
                    </CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400">
                      {certification.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-700 dark:text-gray-300">
                    <p>{certification.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))} 
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="bg-zinc-0 dark:bg-gray-800 py-4 text-center text-sm text-gray-400 dark:text-gray-600 transition-colors">
        {/* <p>&copy; 2025 gixium. All rights reserved.</p> */}
          <p>Engineered with ❤ by Gianluca</p>
          <p className="px-4 py-2">Technology stack: <br /> Astro, Tailwind CSS, Shadcn, Lucide-React, Framer-Motion</p>
      </footer>
    </div>
  )
}

