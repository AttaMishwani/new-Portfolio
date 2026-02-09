import { ArrowUpRight, Code2, Sparkles, Triangle } from "lucide-react"

import MagneticButton from "./MagneticButton"
import SplitText from "./SplitText"

const Hero = ({ heroLines, metrics }) => {
  return (
    <section id="home" className="hero section-block pt-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="hero-scale">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
            <Sparkles size={14} />
            Premium Frontend Craft
          </div>
          <h1 className="hero-title font-display text-4xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
            {heroLines.map((line) => (
              <span key={line} className="block">
                <SplitText text={line} />
              </span>
            ))}
          </h1>
          <p className="hero-sub mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            I design and build cinematic user interfaces for ambitious teams.
            The work blends editorial typography, premium motion systems, and
            experimental layouts that feel alive.
          </p>
          <div className="hero-sub mt-8 flex flex-wrap gap-4">
            <MagneticButton
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-900 shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              View Work <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/80 transition-all duration-300 hover:border-white/60 hover:text-white"
            >
              Start a Project
            </MagneticButton>
          </div>
          <div className="hero-sub mt-8 flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/50">
            <span className="inline-flex items-center gap-2">
              <Code2 size={14} />
              React + GSAP
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="hidden sm:block">Remote worldwide</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 hidden h-36 w-36 rounded-full border border-white/10 bg-white/5 blur-2xl lg:block" />
          <div className="glass-panel rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Signature
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Luxury digital direction
                </p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                2026
              </span>
            </div>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Triangle size={16} className="mt-0.5 text-emerald-300" />
                Motion systems that guide attention and narrative.
              </div>
              <div className="flex items-start gap-3">
                <Triangle size={16} className="mt-0.5 text-emerald-300" />
                Editorial grids built for premium storytelling.
              </div>
              <div className="flex items-start gap-3">
                <Triangle size={16} className="mt-0.5 text-emerald-300" />
                Performance-first builds with accessible interactions.
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="hero-metric rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.2em] text-white/50"
              >
                <p className="text-[10px] text-white/40">{metric.label}</p>
                <p className="mt-3 text-sm font-semibold text-white">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
