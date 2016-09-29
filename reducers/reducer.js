const ADD = 'Add Data to store';
import { combineReducers } from 'redux';

export function addToStore(qstn, option) {
  return {
    type: ADD,
    qstn: qstn,
    opt: option,
  };
}

function SaveToStore(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
          {
            qstn: action.qstn,
            opt: action.opt,
          },
        ];
    default:
      return state;
  }
}

const Reduxstate = combineReducers({
  SaveToStore,
});

export default Reduxstate;
