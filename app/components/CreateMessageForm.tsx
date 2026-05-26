import React, { useState } from 'react'

const CreateMessageForm = ({ user, onSubmit }: { user: string; onSubmit: () => void }) => {

  const [message, setMessage] = useState<string>('')

  const sendMessage = async (message: string) => {
    if (!message) return

    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message, author: user })
    })
    // ADD ERROR HANDLING
    if (!res.ok) {
      console.error('Failed to send message')
      return
    }
    setMessage('')
    onSubmit()
  }

  return (
        <div className="max-w-screen-sm mx-auto px-6 py-2 flex flex-row items-center justify-between gap-4">
          <input 
            type="text" 
            placeholder="Message" 
            className="w-full border rounded p-2 border-[var(--dark-blue)] bg-white" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage(message)
              }
            }}
          />
          <button className="py-2 px-4 bg-[var(--orange)] text-white rounded cursor-pointer" onClick={() => sendMessage(message)}>
            Send
          </button>
        </div>

  )
}

export default CreateMessageForm
