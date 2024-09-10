import { CartsService } from './../../core/services/carts.service';
import { SearchPipe } from './../../core/pipes/search.pipe';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategory } from '../../core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import {
  CurrencyPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../core/services/wishlist.service';
import { IWishlist } from '../../core/interfaces/iwishlist';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    FormsModule,
    RouterLink,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    TermtextPipe,
    SearchPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CategoriesService = inject(CategoriesService);
  private readonly _CartsService = inject(CartsService);
  private readonly _WishlistService = inject(WishlistService);
  private readonly _ToastrService = inject(ToastrService);

  text: string = ''; //for two way data binding
  productList: IProduct[] = [];
  CategoriesList: ICategory[] = [];
  getAllProductSubscripe!: Subscription; // for unsubscribe
  WishList: any[] = [];

  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };

  customOptionsCat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    //for categories carsoul
    this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.CategoriesList = res.data;
      },
    });

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
