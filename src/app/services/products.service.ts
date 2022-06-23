import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/products`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(limit?: number, offset?: number) {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
