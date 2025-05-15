import { useState } from 'react'

const Section = ({ title, children, isOpen: initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen)

  return (
    <div className="p-4 overflow-hidden">
      <button
        className="w-full p-2 py-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-md font-semibold">{title}</h2>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="p-2 text-sm">{children}</div>}
    </div>
  )
}

export default Section