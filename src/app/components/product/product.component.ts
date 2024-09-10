import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { CategoriesService } from '../../core/services/categories.service';
import { CartsService } from '../../core/services/carts.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  CurrencyPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { IProduct } from '../../core/interfaces/iproduct';
import { WishlistService } from '../../core/services/wishlist.service';
import { IWishlist } from '../../core/interfaces/iwishlist';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    TermtextPipe,
    SearchPipe,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CartsService = inject(CartsService);
  private readonly _ToastrService = inject(ToastrService);
  private readonly _WishlistService = inject(WishlistService);

  text: string = ''; //for two way data binding
  productList: IProduct[] = [];

  WishList: any[] = [];

  ngOnInit(): void {
    //for product
    this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.productList = res.data;
        console.log(res.data);
      },
    });

    this._WishlistService.whishList.subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.WishList = data;
        }
      },
    });

    //to map data
    this._WishlistService.getProductTowishList().subscribe({
      next: (res) => {
        const newData = res.data.map((item: any) => item._id);
        this.WishList = newData;
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

  addToWishlist(id: string): void {
    this._WishlistService.addProductTowishList(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message, 'FreshCart', {
          positionClass: 'toast-bottom-right',
        });
        this.WishList = res.data;
        this._WishlistService.ToWishNumber.set(this.WishList.length);
      },
    });
  }

  removeProductWishlist(id: string): void {
    this._WishlistService.deleteSpecficTowishList(id).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message, 'FreshCart', {
          positionClass: 'toast-bottom-right',
        });
        this.WishList = res.data;
        this._WishlistService.ToWishNumber.set(this.WishList.length);
      },
    });
  }
}
