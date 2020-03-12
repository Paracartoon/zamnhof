const initialState = {
        colazione: '',
        cena: '',
        pranzo: ''
  }


const zReducers = (state = initialState, action) => {

  console.log('Z reducers.js, action:', action)


  

    switch(action.type)
    {
    case 'VIEW_COLAZIONE':

    if (action.meta.sequence == 'begin') {
      //  console.log('CUSTOM vaccine reducers 1', action.payload)
      return {...state, colazione: action.payload}
    }
    if (action.meta.sequence == 'complete') {
      console.log('Colazione reducer 2', action.payload.body)

      return {...state, colazione: action.payload.body}
  }
   if (action.meta.sequence == 'error') {

      return {...state, colazione: 'Sorry, something went wrong :('}
  }
  else {
    return state
  }
  }

  return state

  };


export {zReducers}

