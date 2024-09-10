import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { group } from 'console';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
})
export class ForgetpasswordComponent  implements OnDestroy{
  step: number = 1;
  isLoading: boolean = false;
  msgError:string="";
  msgSucess:boolean=false;

  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);

  verifyEmailSub!:Subscription;
  verifyCodeSub!:Subscription;
  resetPasswordSub!:Subscription;

  verifyEmail: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  });

  verifyCode: FormGroup = this._FormBuilder.group({
    resetCode: [null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
  });

  resetPassword: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    newPassword: [null, [Validators.required, Validators.pattern(/^.{6,}$/)]],
  });



  verifyEmailSubmit():void{
    if (this.verifyEmail.valid) 
    {
      let emailValue = this.verifyEmail.get('email')?.value;   
      this.resetPassword.get('email')?.patchValue(emailValue);  // to make email in form(3) reset == email in form(1) verifyEmail 
      this.isLoading=true;
      this.verifyEmailSub =  this._AuthService.setEmailApi(this.verifyEmail.value).subscribe({
        next:(res)=>{
          console.log(res);
          if (res.statusMsg=="success") {
            this.msgError="";
            this.step = 2;
          }
          this.isLoading=false;
        },
        error:(err)=>{
          this.msgError=err.error.message;
          console.log(err);
          this.isLoading=false;
        }
      })
    }
  }


  verifyCodeSubmit():void{
    if (this.verifyCode.valid) {
      this.isLoading=true;
      this.verifyCodeSub =  this._AuthService.setCodeVerify(this.verifyCode.value).subscribe({
        next:(res)=>{
          console.log(res);
          if (res.status=="Success") {
            this.msgError="";
            this.step = 3;
          }
          this.isLoading=false;
        },
        error:(err)=>{
          this.msgError=err.error.message;
          console.log(err);
          this.isLoading=false;
        }
      })
    }
  }


  resetPasswordSubmit():void{
    if (this.resetPassword.valid) {
      this.isLoading=true;
      this.resetPasswordSub =  this._AuthService.setResetPassword(this.resetPassword.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.msgSucess=true;
          this.msgError="";
          localStorage.setItem('userToken', res.token)
          this._AuthService.saveUserData();
          setTimeout(() => {
            this._Router.navigate(['/home'])
          }, 1000);
          this.isLoading=false;
        },
        error:(err)=>{
          this.msgError=err.error.message;
          this.msgSucess=false;
          console.log(err);
          this.isLoading=false;
        }
      })
    }
  }


  ngOnDestroy(): void {
    this.verifyEmailSub?.unsubscribe();
    this.verifyCodeSub?.unsubscribe();
    this.resetPasswordSub?.unsubscribe()
}
}
