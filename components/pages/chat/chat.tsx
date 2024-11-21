'use client'

import { useState } from "react"
import ChatMessageList from "./components/chat-message-list"
import ChatUserSettings from "./components/chat-user-settings"
import ChatMessageInput from "./components/chat-message-input"

export default function Chat() {
  const [messages, setMessages] = useState<{ username: string, text: string }[]>([])
  const [username, setUsername] = useState<string>("")

  const handleSendMessage = (message: string) => {
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, { username, text: message }])
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Tether</h2>
      <ChatUserSettings setUsername={setUsername} />
      <ChatMessageList messages={messages} />
      <ChatMessageInput onSendMessage={handleSendMessage} />
    </div>
  )
}
