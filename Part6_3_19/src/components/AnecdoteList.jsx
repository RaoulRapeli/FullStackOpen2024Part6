import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import {voteOnAnecdote} from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        if(filter!==''){
            return anecdotes.filter(anecdote => (anecdote.content!==''?anecdote.content.toLowerCase().includes(filter.toLowerCase()):anecdote.content))
        }
        else{
            return anecdotes
        }
    })
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteOnAnecdote(id))
        var tempAnecdote = structuredClone(anecdotes).find(anecdote => anecdote.id === id)
        dispatch(setNotification({message:`you voted '${tempAnecdote.content}'`,messageTime:10}))
    }
    
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList