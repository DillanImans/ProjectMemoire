import { combineReducers } from 'redux';

const currentLinkReducer = (state = 0, action) => {
  if (action.type === "CURRENT_LINK"){
    state = action.payload;
  }

  return state;
}

const modalOpenReducer = (state = null, action) => {
  if (action.type === "MODAL_OPEN"){
    state = action.payload;
  }

  return state;
}

const comRed = combineReducers({
  currentLinkState: currentLinkReducer,
  openedModalState: modalOpenReducer
})

export default comRed;