'use client'

import { createContext } from "react"
import { ToastContainer } from 'react-toastify'
import useChatLogic from "./hooks/use-chat-logic"
import ChatMessageList from "./components/chat-message-list"
import ChatUserSettings from "./components/chat-user-settings"
import ChatMessageInput from "./components/chat-message-input"

export const ChatContext = createContext({} as ReturnType<typeof useChatLogic>)

export default function Chat() {

  const contextValue = useChatLogic()

  return (
    <ChatContext.Provider value={contextValue}>
      <div className="min-h-screen flex items-center justify-center w-full">
          <div className="max-w-[700px] w-full h-[95vh] flex flex-col p-2 ring-1 ring-gray-200">
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              Tether
            </h2> 
            <span className='text-center mb-4' style={{fontSize: '10px'}}>by Dean Kudou</span>
            <ChatUserSettings/>
            <ChatMessageList className="flex-grow" />
            <ChatMessageInput/>
          </div>
          <ToastContainer containerId={'messages_toast'} position="top-right" autoClose={5000} hideProgressBar={true} />
        </div>
    </ChatContext.Provider>
  
  )
}
