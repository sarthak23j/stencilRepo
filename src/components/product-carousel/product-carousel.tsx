import { Component, h, Host, Listen, Method, State } from "@stencil/core";
import axios from 'axios';

@Component({
  tag: "product-carousel",
  styleUrl: 'product-carousel.css',
  shadow: true,
})
export class ProductCarousel {

  @State() cart: number[] = [];

  @State() products = [];

  @Method()
  async componentWillLoad() {
    const res = await axios.get('https://localhost:3000/import');
    this.products = res.data;
  }

  updateCart(i: number) {
    if (this.cart.includes(i)) {
      this.cart = this.cart.filter(elem => elem !== i);
    } else {
      this.cart.push(i);
    }
  }

  dlcart(c: number[]) {
    const finalCart = this.products.filter(prod => c.includes(prod.i));
    console.log(finalCart);
  }

  @Listen('cartChange')
  onCartChange(e: any) {
    const i = e.detail[1];
    this.updateCart(i);
  }

  render() {
    return( 
      <Host>
        <header>
          <h1 class="page-title">Product Carousel Page</h1>
          <button class="download" onClick={() => this.dlcart(this.cart)}>Download cart</button>
        </header>
        <div class="carousel">
          {this.products.map((product) => (
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
