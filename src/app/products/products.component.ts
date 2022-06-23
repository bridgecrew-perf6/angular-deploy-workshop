import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private tokenService: TokenService,
    private productsService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe((data) => {
      this.products = data;
    });

  }

  handleLogout():void{
    const that = this;
    this.tokenService.removeToken().subscribe({
      complete() {
        that.router.navigateByUrl('login');
       }
    })
  }
}
