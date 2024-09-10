import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../core/services/auth.service';
import { Component, inject, OnDestroy } from '@angular/core';
import {AbstractControl,FormBuilder,FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent{
// old way in build formGroup
/*registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(20),]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/),]),
      password: new FormControl(null, [Validators.required,Validators.pattern(/^\w{6,}$/),]),
      rePassword: new FormControl(null),
    },this.confirmPassword); */

  private readonly _AuthService = inject(AuthService)
  private readonly _FormBuilder=inject(FormBuilder)
  private readonly _Router=inject(Router)

  msgError:string="";
  isLoading:boolean=false;
  msgSucess:boolean=false;
  regesterSub!:Subscription;
  // another way to build formGroup it is most usage
  registerForm:FormGroup=this._FormBuilder.group({
    name: [null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    email:[null,[Validators.required, Validators.email]],
    phone: [null, [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    password: [null, [Validators.required,Validators.pattern(/^.{6,}$/)]],
    rePassword: [''],
  },{validators :this.confirmPassword });

  registerSubmit(): void 
  {
    if (this.registerForm.valid) 
    {
        this.isLoading=true
        this.regesterSub = this._AuthService.setRegisterForm(this.registerForm.value).subscribe({
          next:(res)=>{
            console.log(res);
            if (res.message=='success') {
              this.msgSucess=true;
              this.msgError="";
              setTimeout(() => {
                this._Router.navigate(['/login'])
              }, 1000);
            }
            this.isLoading=false;
          },
          error:(err:HttpErrorResponse)=>{
            this.msgError=err.error.message;
            this.msgSucess=false;
            console.log(err);
            this.isLoading=false;
          }
        })
    }
    else{
      // this.registerForm.setErrors({ mismatch: true });
      // this.registerForm.markAllAsTouched();
    }
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.regesterSub?.unsubscribe();
  }




  // make custom-validation to confirm password in repassword
  // g is paremeter that refer to formGroup (g==registerForm) and tyoe us abstractControl that can send to formGroup & formControl
  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null; //null it is mean there are no error (error:null) & password == repassword
    } else {
      return { mismatch: true };
    }
  }
}

