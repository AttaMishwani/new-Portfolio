const About = () => {
  return (
    <section id="about" className="section-block">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">About</p>
          <h2 className="font-display text-3xl uppercase tracking-[-0.01em] text-white sm:text-4xl">
            Building stories that move.
          </h2>
          <p className="line-reveal text-sm leading-relaxed text-white/70 sm:text-base">
            I craft interfaces for product teams and studios that want
            cinematic, experimental digital experiences. Every layout,
            animation, and interaction is designed to feel intentional and
            premium.
          </p>
          <p className="line-reveal text-sm leading-relaxed text-white/70 sm:text-base">
            My work blends technical depth with visual discipline, turning
            bold creative direction into a responsive, accessible, and smooth
            reality across devices.
          </p>
          <p className="line-reveal text-sm leading-relaxed text-white/70 sm:text-base">
            From concept to build, the focus is always on creating interfaces
            that people want to explore slowly.
          </p>
        </div>
        <div className="relative">
          <div
            className="line-reveal relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8"
            data-parallax="0.25"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Timeline
              </p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                2019-2026
              </span>
            </div>
            <div className="mt-6 space-y-5 text-sm text-white/70">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  01
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Foundation
                </p>
                <p className="mt-2">
                  UI engineering across landing pages and product launches.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  02
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Motion systems
                </p>
                <p className="mt-2">
                  Building GSAP-driven narratives with ScrollTrigger.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  03
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Premium direction
                </p>
                <p className="mt-2">
                  Leading cinematic portfolio builds for studios.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 -right-8 hidden h-40 w-40 rounded-full border border-white/10 bg-emerald-400/10 blur-2xl lg:block" />
        </div>
      </div>
    </section>
  )
}

export default About
