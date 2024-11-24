'use client'

import { cn } from "@/lib/utils";
import { useLayoutEffect, useMemo, useRef } from "react"

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
          style={{alignItems: msg.sessionId === currentSessionId ? 'end' : 'start'}}
          className={cn(`flex flex-col space-y-1`)}
          >
            <div
              className={`p-3 max-w-max inline-block rounded-lg 
              bg-white text-gray-800
              shadow-md`}
            >
              <span className="font-semibold text-blue-600">{msg.username}: </span>
              <span className="break-words break-all">{msg.text}</span>
            </div>
          </div>
        )
      })}
      <div ref={messageEndRef} />
    </div>
  )
}
