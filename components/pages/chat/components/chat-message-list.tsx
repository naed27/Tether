'use client'

interface ChatMessageListProps {
    messages: { username: string, text: string }[]
  }
  
  export default function ChatMessageList({ messages }: ChatMessageListProps) {
    return (
      <div className="messages space-y-4 h-72 overflow-y-auto border border-gray-300 p-4 rounded-md mb-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className="p-3 bg-blue-100 rounded-md text-gray-800">
            <span className="font-semibold">{msg.username}: </span>{msg.text}
          </div>
        ))}
      </div>
    )
  }
  