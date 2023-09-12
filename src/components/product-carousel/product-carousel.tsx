import { Component, h, Host, Listen, Prop, State } from "@stencil/core";
import Product from "./product";
@Component({
  tag: "product-carousel",
  styleUrl: 'product-carousel.css',
  shadow: true,
})
export class ProductCarousel {
  
  @State() cart: number[] = []

  updateCart(i: number) {
    let x = true;
    for(let j = 0 ; j<=this.cart.length ; j++){
      if (i === this.cart[j]){
        this.cart = this.cart.filter((elem) => elem != i)
        x = false;
      }
    }
    if(x){
      this.cart.push(i)
    }

    console.log(this.cart)
  }
  
  dlcart(){
    console.log("Download clicked!")
    console.log(this.cart)
    return;
  }

  @Listen('cartChange')
  onCartChange(e) {
    let i = e.detail[1];
      this.updateCart(i);
    
  }
  

  render() {
    return (
      <Host>
        <header>
          <h1 class="page-title">Product Carousel Page</h1>
          <button class="download" onClick={this.dlcart}>Download cart</button>
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