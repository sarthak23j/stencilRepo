import { Component, h, Host, Listen, State, Method } from "@stencil/core";
@Component({
  tag: "product-carousel",
  styleUrl: 'product-carousel.css',
  shadow: true,
})
export class ProductCarousel {

  @State() cart: string[] = [];

  @State() products: any;

  
  @Method()
  async getProducts() {    
    const endPoint = 'http://localhost:8080/import/';
    const request = await fetch(endPoint);
    this.products = await request.json();

    console.log('request reponse ---> ', this.products);
  }

  @Method()
  async componentWillLoad(){
    await this.getProducts()
  }
  
  updateCart(type: any) { 
    if (this.cart.includes(type)) {
      this.cart = this.cart.filter(elem => elem !== type);
    } else {
      this.cart.push(type);
    }
  }

  downloadcart(c: string[]) {
    const finalCart = this.products.filter(prod => c.includes(prod.type));
    console.log("your cart : ")
    finalCart.forEach(cartItem => {
      console.log(
        `Product ID : ${cartItem.i}, Name : ${cartItem.name}, Type : ${cartItem.type}`
        )});
  }

  @Listen('cartChange')
  onCartChange(e: any) {
    const type = e.detail[1];
    this.updateCart(type);
  }

  render() {
    return( 
      <Host>
        <header>
          <h1 class="page-title">Product Carousel Page</h1>
          <button class="download" onClick={() => this.downloadcart(this.cart)}>Download cart</button>
        </header>
        <div class="carousel">
          {this.products.map((product) => (
            <product-item
              i={product.i}
              src={product.src}
              name={product.name}
              desc={product.desc}
              price={product.price}
              type={product.type}
            ></product-item>
          ))}
        </div>
      </Host>
    );
  }
}
