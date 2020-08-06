import { Injectable } from "@angular/core";
import { Product } from "../shared/product";
import { PRODUCTS } from "../shared/products";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}
  Products: Product[] = PRODUCTS;
  getProduct(id: string): Product {
    return PRODUCTS.filter((dish) => dish.code === id)[0];
  }
}
