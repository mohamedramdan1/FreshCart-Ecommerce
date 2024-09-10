import { TermtextPipe } from './../../core/pipes/termtext.pipe';
import { ICart } from './../../core/interfaces/icart';
import { Component, inject, OnInit } from '@angular/core';
import { CartsService } from '../../core/services/carts.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink,TermtextPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private readonly _CartsService = inject(CartsService);
  cartDetails: ICart | null = null;

  ngOnInit(): void {
    this._CartsService.getProductCart().subscribe({
      next: (res) => {
        this.cartDetails = res.data;
        this._CartsService.cartNumber.set(res.numOfCartItems)
        if (res.numOfCartItems==0) {
          this.cartDetails=null;
        }
      }
    });
  }

  removeProductCart(id: string): void {
    this._CartsService.deleteSpecficCart(id).subscribe({
      next: (res) => {
        console.log(res);
        //to remove from cart and show new cartdetails
        this.cartDetails = res.data;
        this._CartsService.cartNumber.set(res.numOfCartItems)
        if (res.numOfCartItems == 0) {
          this.cartDetails = null;
        }
      }
    });
  }

  updateCount(id: string, count: number): void {
    this._CartsService.updateCartQunatity(id, count).subscribe({
      next: (res) => {
        // to update
        this.cartDetails = res.data;
        this._CartsService.cartNumber.set(res.numOfCartItems)
        if (res.numOfCartItems == 0) {
          this.cartDetails = null;
        }
      }
    });
  }

  clearAllCart(): void {
    this._CartsService.clearCart().subscribe({
      next: (res) => {
        if (res.message == 'success') {
          this.cartDetails = null;
          this._CartsService.cartNumber.set(0)
        }
      }
    });
  }
}
