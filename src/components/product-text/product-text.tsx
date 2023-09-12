import { Component, h, Listen, Prop, State } from '@stencil/core';


@Component({
  tag: 'product-text',
  styleUrl: 'product-text.css',
  shadow: true,
})
export class FirstComponent {
  @Prop() desc: string;
  @State() added: boolean = false;
  @Prop() price: number;


  @Listen('click')
  handleClick(){
    this.added = !this.added;
  }
  
  render() {
    return (
      <div class="product-text">
        <p class="product-desc">{this.desc} </p>
        <p class="product-price">
          Price : ${this.price}
          <button class="buy-btn">{this.added ? "Remove from cart" : "Add to cart"}</button>
        </p>
      </div>
    );
  }
}
