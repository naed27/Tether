'use client'

import { ChatContext } from "../chat"
import { useContext, useState } from "react"
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

export default function ChatUserSettings() {
  const [tempUsername, setTempUsername] = useState<string>("")
  const [tempRoomCode, setTempRoomCode] = useState<string>("")

  const { setUsername, setRoomId } = useContext(ChatContext)

  const handleUsernameChange = () => {
      setUsername(tempUsername)
      toast.success("Username saved successfully!") 
  }

  const handleRoomCodeChange = () => {
      setRoomId(tempRoomCode)
      toast.success("Room code updated successfully!")
  }

  return (
    <div className="mb-4 text-center flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center space-x-2 w-full">
        <label htmlFor="username" className="font-medium">Name</label>
        <input
          id="username"
          type="text"
          value={tempUsername}
          onChange={(e) => setTempUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
          placeholder="Enter username"
          autoComplete="off"  
          maxLength={24} 
        />
        <button
          onClick={handleUsernameChange}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Save
        </button>
      </div>

      {/* Room Code Input */}
      <div className="flex items-center space-x-2 w-full">
        <label htmlFor="roomCode" className="font-medium">Room</label>
        <input
          id="roomCode"
          type="text"
          value={tempRoomCode}
          onChange={(e) => setTempRoomCode(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
          placeholder="Enter room code"
          autoComplete="off"  
          maxLength={12} 
        />
        <button
          onClick={handleRoomCodeChange}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Subscribe
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} />
    </div>
  )
}
