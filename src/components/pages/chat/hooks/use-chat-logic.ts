import useChatStates from "./use-chat-states"
import useChatHandlers from "./use-chat-handlers"
import { useChatSubscribeToMessages } from "./use-chat-subscribe-to-messages"

export default function useChatLogic() {
  const states = useChatStates()
  const handlers = useChatHandlers(states)

  useChatSubscribeToMessages(states)

  return {
    ...states,
    ...handlers,
  }
}
