import { Injectable } from '@angular/core';
import {StorageService} from "./storage.service";
import {LOGGED_IN_USER} from "../constants/config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) { }

  getLoggedInUser() {
    return this.storageService.getItem(LOGGED_IN_USER)
  }
  setLoggedInUser(loggedUser: any) {
    this.storageService.setItem(LOGGED_IN_USER,loggedUser )
  }
  removeLoggedInUser() : void {
    this.storageService.removeItem(LOGGED_IN_USER)
  }
}
