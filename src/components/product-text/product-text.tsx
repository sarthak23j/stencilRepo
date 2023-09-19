import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'product-text',
  styleUrl: 'product-text.css',
  shadow: true,
})
export class FirstComponent {
  @Prop() i: number;
  @Prop() desc: string;
  @Prop() price: number;
  @Prop() type: string;
  
  render() {
    return (
      <div class="product-text">
        <p class="product-desc">{this.desc} </p>
        <p class="product-price">
          Price : ${this.price}
          <cart-button type={this.type}></cart-button>
        </p>
      </div>
    );
  }
}
