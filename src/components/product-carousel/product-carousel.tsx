import { Component, h, Host, Listen } from "@stencil/core";
import Product from "./product";

function dlcart(){

  console.log("Download clicked!")
  return;
}
@Component({
  tag: "product-carousel",
    styleUrl: 'product-carousel.css',
    shadow: true,
})
export class ProductCarousel {

  @Listen('cartChange')
  onCartChange(e) {
    if(e.detail.added){

    }
  }

  render() {
    return (
      <Host>
        <header>
          <h1 class="page-title">Product Carousel Page</h1>
          <button class="download" onClick={dlcart}>Download cart</button>
        </header>
        <div class="carousel">
          {Product.map((product) => (
            <product-item
              i={product.i}
              src={product.src}
              name={product.name}
              desc={product.desc}
              price={product.price}
            ></product-item>
          ))}
        </div>
      </Host>
    );
  }
}