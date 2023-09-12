import { Component, h, Host } from "@stencil/core";
import Product from "./product";
@Component({
  tag: "product-carousel",
    styleUrl: 'product-carousel.css',
    shadow: true,
})
export class ProductCarousel {
  render() {
    return (
      <Host>
        <h1 class="page-title">Product Carousel Page</h1>

        <div class="carousel">
          {Product.map((product) => (
            <product-item
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