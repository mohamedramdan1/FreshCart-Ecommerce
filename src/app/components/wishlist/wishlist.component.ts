import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';
import { IWishlist } from '../../core/interfaces/iwishlist';
import { CartsService } from '../../core/services/carts.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, TermtextPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent implements OnInit {
  private readonly _WishlistService = inject(WishlistService);
  private readonly _CartsService = inject(CartsService);
  private readonly _ToastrService = inject(ToastrService);

  WishList: any[] = []; //Iwishlist

  ngOnInit(): void {
    this._WishlistService.getProductTowishList().subscribe({
      next: (res) => {
        this.WishList = res.data;
        this._WishlistService.ToWishNumber.set(this.WishList.length);
      },
    });
  }

  removeProductWishlist(id: string): void {
    this._WishlistService.deleteSpecficTowishList(id).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.WishList = this.WishList.filter((item) =>
            res.data.includes(item._id)
          );
          this._WishlistService.ToWishNumber.set(this.WishList.length);
        }
      },
    });
  }

  addToCart(id: string): void {
    this._CartsService.addProductCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message, 'FreshCart', {
          positionClass: 'toast-bottom-right',
        });
        this._CartsService.cartNumber.set(res.numOfCartItems);
      },
    });
  }
}
