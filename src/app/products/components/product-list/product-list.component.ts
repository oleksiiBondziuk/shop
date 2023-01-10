import {Component, OnInit} from '@angular/core';

import {ProductsService} from "../../services/products.service";
import {ProductModel} from "../../models/productModel";
import {CartService} from "../../../cart/services/cart.service";
import {ListMode} from "../../models/list-mode.enum";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  products!: ProductModel[];
  productListMod: ListMode = ListMode.Product;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAddToCart(product: ProductModel) {
    console.log(`${product.name} has been purchased`);

    this.cartService.addToCart(product);
  }
}
