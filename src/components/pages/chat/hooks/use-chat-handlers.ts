import { sessionId } from "@/utils/session"
import { client } from "@/lib/amplify-config"
import { sendMessage } from "@/graphql/mutations"
import { graphqlOperation } from "@aws-amplify/api-graphql"
import useRequestCatcher from "@/hooks/use-request-catcher"

export default function useChatHandlers({ username }: { username: string }) {

  const { requestCatcher } = useRequestCatcher()

    const handleSendMessage = async (roomId: string, message: string) => {

        if(!message.trim()) return

        const newMessage = {
            roomId,
            sessionId,
            text: message,
            id: Date.now().toString(),
            username: username || "Anonymous",
        }

        await requestCatcher({
            payload: newMessage,
            errorMessage: "Error sending message",
            requestFunction: (payload) => client.graphql(graphqlOperation(sendMessage, payload)),
        })
        
    }

    return {
        handleSendMessage,
    }
}
