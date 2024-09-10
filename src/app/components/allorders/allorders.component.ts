import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AllordersService } from '../../core/services/allorders.service';
import { IAllorder } from '../../core/interfaces/iallorder';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [TermtextPipe, CurrencyPipe, DatePipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss',
})
export class AllordersComponent implements OnInit {
  private readonly _AuthService = inject(AuthService);
  private readonly _AllordersService = inject(AllordersService);

  AllOrder: IAllorder[] = [];
  UserId: string = '';

  ngOnInit(): void {
    this._AuthService.saveUserData();
    let res = this._AuthService.userData;
    if (res !== null) {
      this.UserId = res.id;
      // console.log(this.UserId);
      this._AllordersService.getUserOrders(this.UserId).subscribe({
        next: (res) => {
          this.AllOrder = res;
          console.log(res);
        },
      });
    }
  }
}
