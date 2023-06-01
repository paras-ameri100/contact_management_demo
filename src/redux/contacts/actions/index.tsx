import { ActionType } from "../action-types/index"

interface AddAction {
  type: ActionType.ADD,
  payload: {
    id: number,
    firstName: string,
    lastName: string,
    status: boolean
  }
}

interface UpdateAction {
  type: ActionType.UPDATE,
  payload: {
    id: number,
    firstName: string,
    lastName: string,
    status: boolean
  }
}

interface DeleteAction {
  type: ActionType.DELETE
  payload: number
}

export type Action = AddAction | UpdateAction | DeleteAction;