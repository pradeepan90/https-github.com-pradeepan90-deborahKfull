import { Component } from "@angular/core";
import { IProduct } from "./product";

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
  products: IProduct[] = [
    {
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2019",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.2,
      imageUrl: "assets/images/leaf_rake.png"
    },
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2019",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: "assets/images/garden_cart.png"
    }
  ];
  temp_listfilter = "";
  get listFilter(): string {
    return this.temp_listfilter;
  }
  set listFilter(value: string) {
    this.temp_listfilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  constructor() {
    this.filteredProducts = this.products;
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
}
