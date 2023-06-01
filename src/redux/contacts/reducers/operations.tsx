import { ActionType } from "../action-types/index"
import { Action } from "../actions"

interface State {
  id: number,
  firstName: string,
  lastName: string,
  status: boolean
}

const initialState: State[] = [
  {
    id: 1,
    firstName: "Paras",
    lastName: "Bhatt",
    status: true
  },
];

export const operationsReducer = (state: State[] = initialState, action: Action) => {
  switch(action.type) {
    case ActionType.ADD:
      return [...state, action.payload]
    case ActionType.DELETE:
      const filteredContacts = state.filter(item => item.id !== action.payload)
      return filteredContacts;
    case ActionType.UPDATE:
      let data = action.payload;
      let updateContacts:State[] = [];
      state.map(item => {
        if(item.id === data.id) {
          item.id = data.id;    
          item.firstName = data.firstName;
          item.lastName = data.lastName;
          item.status = data.status
        }
        updateContacts.push(item);
      }) 
      return updateContacts; 
    default:
      return state;
  }
}