import { Component, EventEmitter, Input, Output} from '@angular/core';

import { ProductModel } from "../../models/productModel";
import { ListMode } from "../../models/list-mode.enum";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Input() mode!: ListMode;

  @Output() addToCart = new EventEmitter<void>();
  @Output() removeFromCart = new EventEmitter<void>();

  listMode = ListMode;

  onAddToCart() {
    this.addToCart.emit();
  }

  onRemoveFromCart() {
    this.removeFromCart.emit();
  }
}
