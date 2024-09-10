import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);

  msgError: string = "";
  isLoading: boolean = false;
  msgSucess: boolean = false;

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^.{6,}$/)]],
  });

  loginSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._AuthService.setLoginForm(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message == 'success') {
            this.msgSucess = true;
            this.msgError = "";
            setTimeout(() => {

              // 1)save token
              localStorage.setItem('userToken',res.token)

              //2) decode token in authServices to make it share to all project
              this._AuthService.saveUserData()

              //3)navigate to home
              this._Router.navigate(['/home']);
            }, 1000);
          }
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.msgError = err.error.message;
          this.msgSucess = false;
          console.log(err);
          this.isLoading = false;
        },
      });
    } else {
      // this.loginForm.setErrors({ mismatch: true });
      // this.loginForm.markAllAsTouched();
    }
  }

}
