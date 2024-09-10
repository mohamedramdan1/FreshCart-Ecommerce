import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private _HttpClient: HttpClient) {}

  ToWishNumber: WritableSignal<number> = signal(0); // for  number counter
  whishList: BehaviorSubject<any> = new BehaviorSubject([]);


  addProductTowishList(id: string): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/wishlist`, {
      "productId": id,
    });
  }

  getProductTowishList(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/wishlist`);
  }  

  deleteSpecficTowishList(id: string): Observable<any> {
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/wishlist/${id}`);
  }
}
