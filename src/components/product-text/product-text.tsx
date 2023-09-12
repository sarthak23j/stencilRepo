import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'product-text',
  styleUrl: 'product-text.css',
  shadow: true,
})
export class FirstComponent {
  @Prop() desc: string;

  @Prop() price: number;

  render() {
    return (
      <div class="product-text">
        <p class="product-desc">{this.desc} </p>
        <p class="product-price">
          Price : ${this.price}
          <button class="buy-btn">Add to cart</button>
        </p>
      </div>
    );
  }
}
