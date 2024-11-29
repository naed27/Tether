
import { useLayoutEffect } from "react"
import { client } from "@/lib/amplify-config"
import { onMessageSent } from "@/graphql/subscriptions"

export const useChatSubscribeToMessages = ({ setMessages, roomId }: any = {}) => {
  useLayoutEffect(() => {
    setMessages([])
    const subscription = client
      .graphql({query: onMessageSent, variables:{ roomId }})
      .subscribe({
        next: (messageData) => {
          const newMessage = messageData?.data?.onMessageSent
          if (newMessage?.roomId === roomId) {
            setMessages((prevMessages: any) => [...prevMessages, newMessage])
          }
        },
        error: (error) => console.error("Error subscribing to new messages:", error),
      })

    return () => {
      subscription.unsubscribe()
    }
  }, [roomId, setMessages])
}
