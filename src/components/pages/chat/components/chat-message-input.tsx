'use client'

import { useState } from "react"

interface ChatMessageInputProps {
  onSendMessage: (message: string) => void
}

export default function ChatMessageInput({ onSendMessage }: ChatMessageInputProps) {
  const [message, setMessage] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSendMessage(message)
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="flex-1 text-black p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </form>
  )
}
