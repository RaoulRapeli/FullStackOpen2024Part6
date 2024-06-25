const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      const addOneToGood = structuredClone(state)
      addOneToGood.good++
      return addOneToGood
    case 'OK':
      const addOneToOk = structuredClone(state)
      addOneToOk.ok++
      return addOneToOk
    case 'BAD':
      const addOneToBad = structuredClone(state)
      addOneToBad.bad++
      return addOneToBad
    case 'ZERO':
      return { good: 0,ok: 0,bad: 0 }
    default: return state
  }
  
}

export default counterReducer
