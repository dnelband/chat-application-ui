import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-[var(--footer-background)] w-full">
        <div className="max-w-screen-sm mx-auto px-6 py-2 flex flex-row items-center justify-between gap-4">
          <input type="text" placeholder="Message" className="w-full border rounded p-2 border-[var(--footer-border)] bg-white" />
          <button className="py-2 px-4 bg-[var(--button-background)] text-white rounded cursor-pointer">Send</button>
        </div>
      </footer>
  )
}

export default Footer
