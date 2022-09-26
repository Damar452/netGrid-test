import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public showError: boolean = false;

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
    ) { }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  public async onLogin(){
    const logged = this.loginForm.valid && this.authService.login(this.loginForm.value);
    logged ? this.setUser() : this.showError = true;
    this.loginForm.reset();
    // this.loginForm.invalid && this.showError();
  }

  private setUser(){
    this.storageService.setDataUser(this.loginForm.value);
    this.router.navigate(['/list']);
  }

}
