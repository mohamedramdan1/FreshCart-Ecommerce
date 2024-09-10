import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _HttpClient=inject(HttpClient)

  getAllProducts():Observable<any>
  {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`)
  }

  getSpeceficProducts(id:string |null):Observable<any>
  {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products/${id}`)
  }
}
