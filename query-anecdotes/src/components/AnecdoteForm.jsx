import { useMutation, useQueryClient  } from '@tanstack/react-query'
import {createAnecdote } from '../requests'
import { useMessageDispatch } from '../components/MessageContext'


const AnecdoteForm = () => {

  const dispatch = useMessageDispatch()

  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({ 
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    onError: (stauts) =>{
      dispatch({ type: "SET_MESSAGE", payload: stauts.response.data.error })
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes:0 })
    dispatch({ type: "SET_MESSAGE", payload: `Anecdote '${content}' was created` })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
