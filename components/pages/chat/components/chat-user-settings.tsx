'use client'

import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ChatUserSettingsProps {
  setUsername: (username: string) => void
}

export default function ChatUserSettings({ setUsername }: ChatUserSettingsProps) {
  const [tempUsername, setTempUsername] = useState<string>("")

  const handleUsernameChange = () => {
    if (tempUsername.trim()) {
      setUsername(tempUsername)
      toast.success("Username saved successfully!") // Show success toast
    } else {
      toast.error("Please enter a valid username") // Show error toast
    }
  }

  return (
    <div className="mb-4 text-center flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center space-x-2 text-gray-700">
        <label htmlFor="username" className="font-medium">Username</label>
        <input
          id="username"
          type="text"
          value={tempUsername}
          onChange={(e) => setTempUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter username"
        />
        <button
          onClick={handleUsernameChange}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Save
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} />
    </div>
  )
}
