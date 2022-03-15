import { Injectable } from '@angular/core';
import {StorageService} from "./storage.service";
import { TOKEN_KEY} from "../constants/config";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private storageService : StorageService) {}

  getToken() {
    return this.storageService.getItem(TOKEN_KEY)
  }

  saveToken(accessToken:String) : void {
    this.storageService.setItem(TOKEN_KEY, accessToken)
  }

  removeToken() : void {
    this.storageService.removeItem(TOKEN_KEY)
  }

}
