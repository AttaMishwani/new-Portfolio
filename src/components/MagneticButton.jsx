const MagneticButton = ({ children, className, href }) => {
  const Comp = href ? "a" : "button"
  return (
    <Comp
      href={href}
      data-magnetic
      className={`magnetic ${className}`}
      type={href ? undefined : "button"}
    >
      {children}
    </Comp>
  )
}

export default MagneticButton
