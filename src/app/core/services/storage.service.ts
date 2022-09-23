import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  setDataUser(user: Credentials){
    window.sessionStorage.setItem('USER_DATA', JSON.stringify(user));
  }

  getUserData() {
		return JSON.parse(window.sessionStorage.getItem('USER_DATA')!);
	}

  clear(): void {
		return window.sessionStorage.clear();
	}
  
}
