import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

import MagneticButton from "./MagneticButton"

const Contact = () => {
  return (
    <section id="contact" className="section-block">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Contact</p>
          <h2 className="font-display text-3xl uppercase tracking-[-0.01em] text-white sm:text-4xl">
            Ready to craft a cinematic interface?
          </h2>
          <p className="line-reveal text-sm leading-relaxed text-white/70 sm:text-base">
            Share your vision and timeline. I respond within 24 hours with a
            tailored plan and next steps.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
            <a href="mailto:hello@attaportfolio.com" className="flex items-center gap-2">
              <Mail size={14} />
              hello@attaportfolio.com
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-2">
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a href="https://github.com" className="flex items-center gap-2">
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          <form className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white/80 outline-none transition-all duration-300 focus:border-white/40"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white/80 outline-none transition-all duration-300 focus:border-white/40"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                Project Details
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about the project"
                className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white/80 outline-none transition-all duration-300 focus:border-white/40"
              />
            </div>
            <MagneticButton className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-900 shadow-glow">
              Send Request
              <ArrowUpRight size={14} />
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
