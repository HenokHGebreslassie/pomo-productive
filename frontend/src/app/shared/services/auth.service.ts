import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {UserService} from "./user.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService, private tokenService: TokenService) { }

  private isLoggedIn() : boolean {
    const token: string = this.tokenService.getToken()
    return Boolean(token)
  }

  public getUser() : User {
    if(this.isLoggedIn()) {
      return User.createUserFromObject(this.userService.getLoggedInUser())
    }
    return User.userHolder
  }
}
