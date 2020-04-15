import { Component } from "@angular/core";
import { IProduct } from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  pageTitle: string = "Product list";
  showImage: boolean = false;
  //listFilter: string = "cart";
  filteredProducts: IProduct[] = [];
  products: IProduct[] ;
  temp_listfilter = "";
    errorMessage = '';
  get listFilter(): string {
    return this.temp_listfilter;
  }
  set listFilter(value: string) {
    this.temp_listfilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  constructor(private productService : ProductService) {
    
    this.listFilter = "";
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  ngOnInit(): void {
   // this.products = this.productService.getProducts();
   // this.filteredProducts = this.products;
       this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
}
