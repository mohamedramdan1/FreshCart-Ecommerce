import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CurrencyPipe } from '@angular/common';
import { CartsService } from '../../core/services/carts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule, CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit, OnDestroy {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CartsService = inject(CartsService);
  private readonly _ToastrService = inject(ToastrService);

  detaileSub!: Subscription;
  detailsProduct: IProduct | null = null; //object

  customOptionsDetails: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };

  ngOnInit(): void {
    this.detaileSub = this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        let idProduct = param.get('id'); // we get the id from parameter in path
        this._ProductsService.getSpeceficProducts(idProduct).subscribe({
          next: (res) => {
            this.detailsProduct = res.data;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.detaileSub?.unsubscribe();
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
