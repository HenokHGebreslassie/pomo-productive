import { State } from './state'
import {User} from "../models/user";


const initialState: State  = {
  user : User.userHolder
}

export function reducer(state: State = initialState, action: {type:string, payload : any}) {
  switch (action.type) {
    case 'STORE_USER' :
      return{
        ...state,
        user : User.createUserFromObject({...state.user, ...action.payload})
      }

    case 'REMOVE_USER_FROM_STORE' :
      return {
        ...state,
        user: User.userHolder
      }

    default :
      return state
  }
}
