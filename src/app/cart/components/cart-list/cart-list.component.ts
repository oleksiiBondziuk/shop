import { Component } from '@angular/core';

import { CartService } from "../../services/cart.service";
import { ProductModel } from "../../../products/models/productModel";
import { ListMode } from "../../../products/models/list-mode.enum";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  cartList$ = this.cartService.cartList$;
  cartListMod: ListMode = ListMode.Cart;

  constructor(
    private cartService: CartService
  ) {
  }

  trackByProduct(index: number, product: ProductModel): number {
    return product.id;
  }

  onRemoveFromCart(id: number) {
    console.log(`Product with id: ${id} has been removed from cart`)

    this.cartService.removeFromCart(id);
  }
}
