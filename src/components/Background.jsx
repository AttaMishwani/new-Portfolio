const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-noise" />
      <div className="orb absolute left-[10%] top-[8%] h-56 w-56 rounded-full bg-emerald-500/30 blur-[140px]" />
      <div className="orb absolute right-[8%] top-[22%] h-64 w-64 rounded-full bg-blue-500/30 blur-[140px]" />
      <div className="orb absolute bottom-[10%] left-[25%] h-72 w-72 rounded-full bg-indigo-500/30 blur-[170px]" />
    </div>
  )
}

export default Background
