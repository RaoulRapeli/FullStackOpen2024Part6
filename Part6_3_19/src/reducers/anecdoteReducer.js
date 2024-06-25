import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers:{
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    anecdotes.sort((a,b) => b.votes-a.votes)
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteOnAnecdote = id =>{
  {
    return async dispatch => {
      var anecdotes = await anecdoteService.getAll()
      var newVote = anecdotes.find(value => value.id === id)
      newVote.votes++
      await anecdoteService.update(newVote)
      dispatch(setAnecdotes(anecdotes.map(ancdote => ancdote.id!==id?ancdote:newVote).sort((a,b) => b.votes-a.votes)))
    }
  }
}

export default anecdoteSlice.reducer