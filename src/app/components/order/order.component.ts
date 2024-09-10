import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../core/services/orders.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _OrdersService = inject(OrdersService);

  cartId: string | null = '';
  isLoading: boolean = false;

  orderForm: FormGroup = this._FormBuilder.group({
    details: [null, [Validators.required, Validators.minLength(3)]],
    phone: [
      null,
      [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
    ],
    city: [null, [Validators.required, Validators.minLength(3)]],
  });

  orderpayment(): void {
    this.isLoading = true;
    console.log(this.orderForm.value);
    this._OrdersService.checkOut(this.cartId, this.orderForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == 'success') {
          this.isLoading = false;
          window.open(res.session.url, '_self'); //url for stripe
        }
      },
      error: (err) => {
        console.log(err);

        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.cartId = param.get('id');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
