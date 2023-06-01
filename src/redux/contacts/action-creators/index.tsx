import { ActionType } from "../action-types"

interface Payload {
  id: number | null,
  firstName: string,
  lastName: string,
  status?: boolean
}

export const addContact = (payload:Payload) => {
  return {
    type: ActionType.ADD,
    payload
  }
}

export const removeContact = (payload:number) => {
  return {
    type: ActionType.DELETE,
    payload
  }
}

export const updateContact = (payload:Payload) => {
  return {
    type: ActionType.UPDATE,
    payload
  }
}
