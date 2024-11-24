'use client'

import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef } from "react"

interface ChatMessageListProps {
  messages: { id: string; username: string; text: string; createdAt: string; sessionId:string }[] // Add sessionId to each message
  className?: string
  currentSessionId: string 
}

export default function ChatMessageList({
  messages,
  className,
  currentSessionId
}: ChatMessageListProps) {
  const messageEndRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className={`messages space-y-4 overflow-y-auto mb-4 pr-2 ${className}`}>
      {messages.map((msg, index) => {
        return (
          <div
            key={index}
            className={cn(`flex flex-col space-y-1`)}
            style={{ alignItems: msg.sessionId === currentSessionId ? 'flex-end' : 'flex-start' }}
          >
            <span className="text-gray-600 text-xs font-medium ml-1">{`${msg.username}${msg.sessionId === currentSessionId ? ' (You)':''}`}</span>
            <div
              style={{
                background: msg.sessionId === currentSessionId ? '#0089FF' : 'white',
                color: msg.sessionId === currentSessionId ? 'white' : 'black'
              }}
              className={`p-3 max-w-max inline-block rounded-lg shadow-md`}
            >
              <span className="break-words break-all">{msg.text}</span>
            </div>
          </div>
        )
      })}
      <div ref={messageEndRef} />
    </div>
  )
}
