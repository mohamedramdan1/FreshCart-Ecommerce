import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CartsService } from '../../core/services/carts.service';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent implements OnInit {
  readonly _AuthService = inject(AuthService); // make it public that make us to write in html
  private readonly _CartsService = inject(CartsService);
  private readonly _WishlistService = inject(WishlistService);

  countNumber: Signal<number> = computed(() => this._CartsService.cartNumber());

  countNumberTowish: Signal<number> = computed(() => this._WishlistService.ToWishNumber()
  );

  ngOnInit(): void {
    this._CartsService.getProductCart().subscribe({
      next: (res) => {
        this._CartsService.cartNumber.set(res.numOfCartItems); // for count cart when open and reload
      },
    });

    this._WishlistService.getProductTowishList().subscribe({
      next: (res) => {
        this._WishlistService.ToWishNumber.set(res.data.length);
      },
    });
  }
}
