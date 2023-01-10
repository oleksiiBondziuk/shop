import { Component } from '@angular/core';

import { CategoryModel } from "../../models/categoryModel";

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name: string = 'FirstComponent';
  description: string = 'Description of FirstComponent';
  price: number = 999;
  category = CategoryModel.Clothes;
  isAvailable: boolean = true;
  products: Array<string> = [
    'jackets',
    'T-shirts',
    'gloves'
  ];
  shipmentCountries: Array<string> = [
    'Ukraine',
    'Poland',
    'Germany'
  ];
}
