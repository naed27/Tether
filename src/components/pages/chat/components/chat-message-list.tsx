'use client'

import { cn } from "@/lib/utils";
import { ChatContext } from "../chat";
import { sessionId } from "@/utils/session";
import { useContext, useLayoutEffect, useRef } from "react"

interface ChatMessageListProps {
  className?: string
}

export default function ChatMessageList({ className }: ChatMessageListProps) {

  const messageEndRef = useRef<HTMLDivElement | null>(null)

  const { messages } = useContext(ChatContext)

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
            style={{ alignItems: msg.sessionId === sessionId ? 'flex-end' : 'flex-start' }}
          >
            <span className="text-gray-600 text-xs font-medium ml-1">{`${msg.username}${msg.sessionId === sessionId ? ' (You)':''}`}</span>
            <div
              style={{
                background: msg.sessionId === sessionId ? '#0089FF' : 'white',
                color: msg.sessionId === sessionId ? 'white' : 'black'
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
