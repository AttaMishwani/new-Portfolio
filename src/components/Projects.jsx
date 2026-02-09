import { ArrowUpRight } from "lucide-react"

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects-section section-block">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Projects
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase tracking-[-0.01em] text-white sm:text-4xl">
              A horizontal narrative of flagship builds.
            </h2>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">
            Scroll to explore
          </div>
        </div>
      </div>
      <div className="projects-wrap mx-auto mt-12 flex min-h-[70vh] max-w-[1400px] items-center overflow-hidden">
        <div className="projects-track flex gap-6 px-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="project-card relative min-w-[320px] shrink-0 rounded-[32px] border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/40 lg:min-w-[420px] xl:min-w-[520px] 2xl:min-w-[620px]"
            >
              <div className="image-scroll aspect-square w-full max-h-[300px] overflow-y-auto rounded-[24px] border border-white/10">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-8 font-display text-2xl uppercase tracking-[-0.01em] text-white">
                {project.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
                <span className="inline-flex items-center gap-2">
                  Live preview
                  <ArrowUpRight size={14} />
                </span>
              </div>
              <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
