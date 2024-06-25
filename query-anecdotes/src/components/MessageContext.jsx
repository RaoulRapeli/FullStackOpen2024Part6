import { createContext, useReducer, useContext } from 'react'

const mesageReducer = (state, action) => {
    switch (action.type) {
        case "SET_MESSAGE":
            return action.payload
        default:
            return state
    }
}

const MessageContext = createContext()

export const useMessageValue = () => {
    const messageAndDispatch = useContext(MessageContext)
    return messageAndDispatch[0]
}

export const useMessageDispatch = () => {
    const messageAndDispatch = useContext(MessageContext)
    return messageAndDispatch[1]
}

export const MessageContextProvider = (props) => {
    const [message, messageDispatch] = useReducer(mesageReducer, "")
  
    return (
      <MessageContext.Provider value={[message, messageDispatch]}>
        {props.children}
      </MessageContext.Provider>
    )
  }

export default { MessageContext }