import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

import About from "./components/About"
import Background from "./components/Background"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { heroLines, metrics, projects, skills } from "./data/portfolio"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const rootRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08,
    })
    let projectResizeHandler

    const onTick = (time) => {
      lenis.raf(time * 1000)
    }

    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {
      const heroChars = gsap.utils.toArray(".hero-title .char")
      gsap.set(heroChars, { yPercent: 120, rotateX: 65, opacity: 0 })
      gsap.set(".hero-sub", { opacity: 0, y: 30 })
      gsap.set(".hero-metric", { opacity: 0, y: 30 })

      const intro = gsap.timeline({ defaults: { ease: "power4.out" } })
      intro
        .to(".nav-appear", { opacity: 1, y: 0, duration: 0.8 })
        .to(
          heroChars,
          {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.02,
          },
          "-=0.2"
        )
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to(
          ".hero-metric",
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.4"
        )

      gsap.to(".hero-scale", {
        scale: 0.92,
        opacity: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.utils.toArray(".line-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            },
          }
        )
      })

      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        const speed = Number(element.dataset.parallax) || 0.2
        gsap.to(element, {
          yPercent: -25 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      gsap.utils.toArray(".skill-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        )
      })

      const track = document.querySelector(".projects-track")
      const wrap = document.querySelector(".projects-wrap")
      if (track && wrap) {
        let scrollTween
        const updateScroll = () => {
          if (scrollTween) {
            scrollTween.scrollTrigger?.kill()
            scrollTween.kill()
          }
          const totalScroll = Math.max(0, track.scrollWidth - wrap.offsetWidth)
          if (totalScroll === 0) {
            gsap.set(track, { x: 0 })
            ScrollTrigger.refresh()
            return
          }
          scrollTween = gsap.to(track, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "center center",
              end: () => `+=${track.scrollWidth}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          })
        }

        updateScroll()
        ScrollTrigger.refresh()
        projectResizeHandler = updateScroll
        window.addEventListener("resize", projectResizeHandler)
      }

      gsap.to(".orb", {
        y: -18,
        x: 12,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.6,
      })
    }, rootRef)

    const magneticTargets = rootRef.current?.querySelectorAll("[data-magnetic]")
    const handleMagnet = (event) => {
      const target = event.currentTarget
      const rect = target.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      gsap.to(target, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: "power3.out" })
    }
    const handleMagnetLeave = (event) => {
      const target = event.currentTarget
      gsap.to(target, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" })
    }

    magneticTargets?.forEach((el) => {
      el.addEventListener("mousemove", handleMagnet)
      el.addEventListener("mouseleave", handleMagnetLeave)
    })

    return () => {
      magneticTargets?.forEach((el) => {
        el.removeEventListener("mousemove", handleMagnet)
        el.removeEventListener("mouseleave", handleMagnetLeave)
      })
      ctx.revert()
      if (projectResizeHandler) {
        window.removeEventListener("resize", projectResizeHandler)
      }
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={rootRef} className="min-h-screen bg-void text-slate-100">
      <Background />
      <Nav />
      <Hero heroLines={heroLines} metrics={metrics} />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
