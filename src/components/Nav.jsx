import MagneticButton from "./MagneticButton"

const Nav = () => {
  return (
    <nav
      className="nav-appear fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 opacity-0"
      style={{ transform: "translateY(-12px)" }}
    >
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
          Atta Ur Rehman
        </span>
    
      </div>
      <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-white/60 md:flex">
        {"Home About Skills Projects Contact".split(" ").map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="transition-colors duration-300 hover:text-white"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <MagneticButton
          href="#contact"
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition-all duration-300 hover:border-white/50 hover:bg-white/20"
        >
          Initiate
        </MagneticButton>
      </div>
    </nav>
  )
}

export default Nav
