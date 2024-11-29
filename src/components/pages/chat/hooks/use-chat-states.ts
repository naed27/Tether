import { useState } from "react"

export default function useChatStates() {

    const [roomId, setRoomId] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [messages, setMessages] = useState<{ id: string; username: string; text: string; createdAt: string; sessionId: string }[]>([])

    return {
        roomId, setRoomId,
        username, setUsername,
        messages, setMessages,
    }
}