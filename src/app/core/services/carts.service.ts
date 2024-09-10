import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private _HttpClient: HttpClient) {}

  cartNumber: WritableSignal<number> = signal(0); // for cart number counter

  addProductCart(id: string): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`, {
      "productId": id,
    });
  }

  getProductCart(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`);
  }

  deleteSpecficCart(id: string): Observable<any> {
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`);
  }

  updateCartQunatity(id: string, NewCount: number): Observable<any> {
    return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`, {
      "count": NewCount,
    });
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`);
  }
}
