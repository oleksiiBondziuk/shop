import {Injectable} from '@angular/core';

import {ProductModel} from "../models/productModel";
import {CategoryModel} from "../../first/models/categoryModel";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Array<ProductModel> = [
    {
      id: 1,
      name: 'backpack',
      category: CategoryModel.Equipment,
      price: 100,
      isAvailable: true,
      image: 'assets/backpack.png'
    },
    {
      id: 2,
      name: 'jacket',
      category: CategoryModel.Clothes,
      price: 150,
      isAvailable: true,
      image: 'assets/jacket.png'
    },
    {
      id: 3,
      name: 'boots',
      category: CategoryModel.Shoes,
      price: 120,
      isAvailable: true,
      image: 'assets/boots.png'
    },
    {
      id: 4,
      name: 'pants',
      category: CategoryModel.Clothes,
      price: 70,
      isAvailable: false,
      image: 'assets/pants.png'
    }
  ]

  getProducts(): ProductModel[] {
    return this.products;
  }
}
