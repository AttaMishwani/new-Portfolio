const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section-block">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Skills
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase tracking-[-0.01em] text-white sm:text-4xl">
              A toolkit built for premium interfaces.
            </h2>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-emerald-300">
            Always shipping
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="skill-card group rounded-3xl border border-white/10 bg-white/5 p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold uppercase tracking-[0.2em] text-white">
                  {skill.title}
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50">
                  Active
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-px bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Combining deep frontend engineering with cinematic motion to
                craft immersive digital experiences.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
