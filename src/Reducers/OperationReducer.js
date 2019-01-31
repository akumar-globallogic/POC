import { ADD_NAME, DELETE_NAME } from '../Actions/types';

const initialState = { names: [ 'Mr India',"Mrs India" ] }

export default function namesReducer(state = initialState, action) {
  switch (action.type) {
     
    case ADD_NAME:
    console.log("action",action)
      return {
        names: [...state.names, action.name],
      };
    case DELETE_NAME:
      return {
        names: state.names.filter(p => p !== action.name),
      };
    default:
      return state;
  }
}
