import { Component, OnInit } from "@angular/core";
import { Product } from "../shared/product";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"],
})
export class InvoiceComponent implements OnInit {
  constructor(private productservice: ProductService) {}

  ngOnInit() {}
  product: Product;
  name: string;
  price: string;

  abc1() {
    const code1 = document.querySelector(".productcode") as HTMLInputElement;
    const code2 = code1.value;
    if (code1 != null) {
      this.product = this.productservice.getProduct(code2);
      this.name = this.product.name;
      this.price = this.product.price;
      console.log(this.product);
    }

    //price = this.product.price;
  }
}
