import {User} from "../models/user";

export function storeUser(user:User) {
  return {
    type:'STORE_USER',
    payload : user
  }
}

export function removeUserFromStore() {
  return {
    type : 'REMOVE_USER_FROM_STORE',
    payload : null
  }
}
