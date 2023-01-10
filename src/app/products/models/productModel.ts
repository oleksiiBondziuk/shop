import { CategoryModel } from "../../first/models/categoryModel";

export interface ProductModel {
  id: number;
  name: string;
  category: CategoryModel;
  price: number;
  isAvailable: boolean;
  image: string;
}
