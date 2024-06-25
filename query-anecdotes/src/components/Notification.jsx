import { useEffect } from 'react'
import { useMessageValue, useMessageDispatch } from '../components/MessageContext'

const Notification = () => {

  const message = useMessageValue()
  const dispatch = useMessageDispatch()
  
  useEffect(() => {
    if(message){
      const timeOutId = setTimeout(() => {
        dispatch({ type: "SET_MESSAGE", payload: "" })
      }, 5000);
      return () => clearTimeout(timeOutId);
    }
  }, [message,dispatch]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  return (
    <>
    {message!==''?
      <div style={style}>
        {message}
      </div>
      :
      null
    }
  </>
  )
}

export default Notification
