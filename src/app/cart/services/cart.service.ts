import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

import { ProductModel } from "../../products/models/productModel";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartListSubject$ = new BehaviorSubject<ProductModel[]>([])
  cartList$ = this.cartListSubject$.asObservable();

  addToCart(newProduct: ProductModel): void {
    this.cartListSubject$.next([...this.getCartListValue(), newProduct])
  }

  removeFromCart(id: number): void {
    const cartList = this.getCartListValue();
    const removeItemIndex = cartList.findIndex((product: ProductModel) => product.id === id);

    cartList.splice(removeItemIndex, 1);
    this.cartListSubject$.next(cartList)
  }

  private getCartListValue(): ProductModel[] {
    return this.cartListSubject$.value;
  }
}
