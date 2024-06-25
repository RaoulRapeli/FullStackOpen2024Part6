import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(({ notification}) => {
    return notification
  })

  const dispatch = useDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  useEffect(() => {
    if(notification.message){
      const timeOutId = setTimeout(() => {
        dispatch(setNotification({message:"",messageTime:0}))
      }, notification.messageTime*1000);
      return () => clearTimeout(timeOutId);
    }
  }, [dispatch,notification])

  return (
    <>
      {notification.message!==''?
        <div style={style}>
          {notification.message}
        </div>
        :
        null
      }
    </>
  )
}

export default Notification