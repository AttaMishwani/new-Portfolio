const SplitText = ({ text }) => {
  return (
    <span className="split-text">
      {text.split(" ").map((word, wordIndex) => (
        <span className="split-word" key={`${word}-${wordIndex}`}>
          {word.split("").map((char, charIndex) => (
            <span className="char" key={`${word}-${charIndex}`}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  )
}

export default SplitText
