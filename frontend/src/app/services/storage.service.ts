import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage: Storage
  constructor() {
      this.storage = window.localStorage
    if(!this.storage) {
      throw new Error('Your Browser does not support storage')
    }
  }
  setItem(key: string, value: string | object) : void {
    this.storage.setItem(key, JSON.stringify(value))
  }
  getItem(key: string) : any {
    return JSON.parse(this.storage.getItem(key)!)
  }
  removeItem(key:string) : void {
    this.storage.removeItem(key)
  }
  clear(): void {
    this.storage.clear()
  }
}
