import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private emailValid = 'info@yampi.co';
  private passValid = '12345678';

  constructor() { }

  public login(user: Credentials): boolean {
    const { email, password } = user;
    return (email === this.emailValid && password === this.passValid);
  }

}
