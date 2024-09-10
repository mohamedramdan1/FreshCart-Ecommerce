import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  //logic here
  const _ToastrService = inject(ToastrService);
  // requst here
  return next(req).pipe(
    catchError((err) => {
      if (
        req.url.includes('signup') ||
        req.url.includes('signin') ||
        req.url.includes('forgotPasswords') ||
        req.url.includes('verifyResetCode') ||
        req.url.includes('resetPassword')
      ) {
        // dont make toastr
      } else {
        _ToastrService.error(err.error.message, 'FreshCart', {
          positionClass: 'toast-bottom-right',
        });
      }
      return throwError(() => err);
    })
  );
};
