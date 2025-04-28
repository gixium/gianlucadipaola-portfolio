"use client"

import { usePreferredLanguage } from "@uidotdev/usehooks";
import * as enData from "@/lib/siteData"
import * as itData from "@/lib/siteData-ITA"
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
  // Sun, 
  // Moon, 
  FileDown as Download,
  ChevronLeft,
  ChevronRight,
  ChevronsDown,
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
import { cn } from "@/lib/utils"
import { Pacifico } from "next/font/google"
// import { Leckerli_One } from "next/font/google"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Btn03 from "@/components/ui/button-magnet"

const titleFont = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLandingPage, setIsLandingPage] = useState(true)
  const [isGridView, setIsGridView] = useState(false)
  const language = usePreferredLanguage()
  const data = language === "en" ? enData : itData
  const [contactOpen, setContactOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode)
  // }

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


{/* Navbar Container <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 opacity-5 dark:opacity-10 bg-f rounded-full"></div>*/}
<div className="fixed top-0 left-0 right-0 z-50 pointer-events-none animate-fadeIn navbar-container">
        <div className="container mx-auto px-2 sm:px-4 py-4">
          {/* Classic Horizontal Navbar */}
          <div className="pointer-events-auto">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full shadow-lg p-3 border border-gray-200/50 dark:border-gray-600/50 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 opacity-5 dark:opacity-10 bg-f rounded-full"></div>
                {/* Logo/Name */}
                <div className={`${titleFont.className} text-lg sm:text-xl text-gray-900 dark:text-gray-100 pl-2`}>Gianluca</div>

                {/* Navigation Links */}
                <nav className="hidden md:block w-auto">
                  <ul className="flex space-x-4 lg:space-x-8">
                    {data.navItems.map((item) => (
                      <li key={item.name}>
                        <a
                          href={`#${item.name.toLowerCase()}`}
                          onClick={(e) => handleSmoothScroll(e, item.name.toLowerCase())}
                          className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors flex items-center gap-2"
                        >
                          <item.icon className="h-5 w-5 hidden lg:inline" />
                          <span>{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Button & Theme Toggle */}
                <div className="flex items-center gap-3">
                  {/* <Button
                    onClick={toggleDarkMode}
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button> */}

                  <div className="relative md:hidden">
                    <Button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 overflow-hidden transition-colors duration-300 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full h-8 w-8"
                    >
                      {/* <span>Sections</span> */}
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
                      />
                    </Button>

                    <AnimatePresence>
                    {mobileMenuOpen && (
                      <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full w-48 bg-white dark:bg-gray-800 backdrop-blur-md rounded-lg p-3 shadow-lg z-50 transition-colors mt-4"
                      >
                        <ul className="grid grid-cols-1 gap-2">
                          {data.navItems.map((item) => (
                            <li key={item.name}>
                              <a
                                href={`#${item.name.toLowerCase()}`}
                                onClick={(e) => {
                                  handleSmoothScroll(e, item.name.toLowerCase())
                                  setMobileMenuOpen(false)
                                }}
                                className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                <span> <item.icon className="h-5 w-5" /></span>
                                <span>{item.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    </AnimatePresence>
                  </div>

                  {/* <Button
                    onClick={() => setContactOpen(true)}
                    className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white"
                  >
                    Contact Me
                  </Button> */}

                  <Btn03 className="font-semibold py-4 mr-2 rounded-full" particleCount={24} attractRadius={60} onClick={() => setContactOpen(true)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 border-0 rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">Contact Me</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              Connect with me through any of these platforms
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-2 py-2">
            <a
              href="https://github.com/gixium"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
            >
              <div className="p-2 rounded-full bg-gray-100/0 dark:bg-gray-700/0">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">View my projects</div>
              </div>
            </a>
            <a
              href="/gianluca_di_paola_cv.pdf"
              download
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
            >
              <div className="p-2 rounded-full bg-gray-100/0 dark:bg-gray-700/0">
                <Download className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium">Download CV</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Get my resume</div>
              </div>
            </a>
            <a
              href="mailto:ing@gianlucadipaola.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
            >
              <div className="p-2 rounded-full bg-gray-100/0 dark:bg-gray-700/0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">ing@gianlucadipaola.com</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/gianlucadipaola"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
            >
              <div className="p-2 rounded-full bg-gray-100/0 dark:bg-gray-700/0">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Connect with me</div>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>


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
          {data.landing.map((item, index) => (
            <div key={index}>
              <h1 className={cn("text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100 titolo-1", titleFont.className)}>
                {item.title}
              </h1>
              <p className="text-xl md:text-1xl pt-2 mb-8 tracking-wide text-gray-600 dark:text-gray-300 sottotitolo">
                {item.subtitle}
              </p>
              <Btn03 className="font-semibold text-lg p-6 " particleCount={32} attractRadius={60} onClick={() => setContactOpen(true)} />
            </div>
          ))}
          
          <div className="flex justify-center space-x-4 pt-10">
            <motion.div
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="inline-block cursor-pointer"
            >
              <a href="#education" onClick={(e) => handleSmoothScroll(e, "start")}>
                <ChevronsDown size={48} className="text-gray-900 dark:text-gray-100"
                />
              </a>
            </motion.div>
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
            {data.about.map((item, index) => (
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
          <div className="grid grid-rows-1 md:grid-rows-1 gap-6">
            {data.education.map((education, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">
                      {education.title}
                    </CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3">
                      {education.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      {education.contents.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                    {/* {education.contents.map((value, index) => 
                      <p key={index} className="{index}==5?font-bold">{value}</p>
                    )} */}
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
                  {data.projects.map((project, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                      <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors h-full flex flex-col">
                        <CardHeader className="flex-shrink-0">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors titolo-2"
                          >
                            <CardTitle className="flex items-center gap-2">
                                <Github className="h-6 w-6" />
                                {project.title}
                            </CardTitle>
                            <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3 mt-1.5">
                              {project.description}
                            </CardDescription>
                          </a>
                        </CardHeader>
                        <CardContent className="text-gray-700 dark:text-gray-300 flex-grow flex flex-col justify-between">
                          <p className="mb-4">{project.content}</p>
                          <div className="flex flex-wrap gap-2 mt-auto pt-4">
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
                                        ${project.badgeColor === "yellow" ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" : ""}
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
                      {data.projects.map((project, index) => (
                        <div key={index} className="flex-[0_0_50%] min-w-0 pl-4">
                          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                            <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors h-full">
                              <CardHeader>
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-800 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors titolo-2"
                                >
                                  <CardTitle className="flex items-center gap-2">
                                    <Github className="h-6 w-6" />
                                      {project.title}
                                  </CardTitle>
                                  <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3 mt-1.5">
                                    {project.description}
                                  </CardDescription>
                                </a>
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
                                        ${project.badgeColor === "yellow" ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" : ""}
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
          <div className="grid grid-rows-1 md:grid-rows-1 gap-6">
            {data.experiences.map((experience, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">{experience.title}</CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3">
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
            {data.certifications.map((certification, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">
                      {certification.title}
                    </CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3">
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
      <footer className="bg-zinc-0 dark:bg-slate-950 py-4 text-center text-sm text-gray-400 dark:text-gray-600 transition-none">
        {/* <p>&copy; 2025 gixium. All rights reserved.</p> */}
          <p>Engineered with ❤ by Gianluca</p>
          <p className="px-4 py-2">Technology stack: <br /> React, Next.js, Tailwind CSS, Shadcn/UI, Lucide-React, Framer-Motion</p>
      </footer>
    </div>
  )
}

