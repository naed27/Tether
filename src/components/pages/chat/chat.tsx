'use client'

import { v4 as uuidv4 } from 'uuid'
import { Amplify } from 'aws-amplify'
import { useState, useEffect } from "react"
import { generateClient } from 'aws-amplify/api'
import { sendMessage } from '@/graphql/mutations'
import { toast, ToastContainer } from 'react-toastify'
import { onMessageSent } from '@/graphql/subscriptions';
import { graphqlOperation } from '@aws-amplify/api-graphql'
import ChatMessageList from "./components/chat-message-list"
import ChatUserSettings from "./components/chat-user-settings"
import ChatMessageInput from "./components/chat-message-input"

Amplify.configure({
  API: {
    GraphQL: {
      region: 'ap-northeast-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-lnrugpu4bfg4xatgxu4htiuyp4',
      endpoint: 'https://ectpg72nibgybhjpua6u5pz4qq.appsync-api.ap-northeast-1.amazonaws.com/graphql',
    }
  }
})

const client = generateClient()

const sessionId = uuidv4()

export default function Chat() {
  const [messages, setMessages] = useState<{ id: string; username: string; text: string; createdAt: string; sessionId:string }[]>([])
  const [username, setUsername] = useState<string>("")

  const handleSendMessage = async (message: string) => {
    if (message.trim()) {
      const newMessage = {
        sessionId,
        text: message,
        id: Date.now().toString(),
        username: username || "Anonymous",
      }

      try {
        await client.graphql(graphqlOperation(sendMessage, newMessage))
      } catch (err) {
        toast.error("Error sending message")
        console.error('Error sending message:', err)
      }
    }
  }

  useEffect(() => {
    const subscription = client.graphql({ query: onMessageSent }).subscribe({
      next: (messageData) => {
        const newMessage = messageData?.data?.onMessageSent
        if (newMessage) {
          setMessages((prevMessages) => [...prevMessages, newMessage])
        }
      },
      error: (error) => {
        console.error('Error subscribing to new messages:', error)
      },
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="max-w-[700px] w-full h-[90vh] flex flex-col p-6 ring-1 ring-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Tether</h2>
        <ChatUserSettings setUsername={setUsername} />
        <ChatMessageList messages={messages} className="flex-grow" currentSessionId={sessionId} />
        <ChatMessageInput onSendMessage={handleSendMessage} />
      </div>
      <ToastContainer containerId={'messages_toast'} position="top-right" autoClose={5000} hideProgressBar={true} />
    </div>
  )
}
