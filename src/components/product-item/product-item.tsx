import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'product-item',
  styleUrl: 'product-item.css',
  shadow: true,
})
export class ProductItem {
  @Prop() src: string;

  @Prop() name: string;

  @Prop() desc: string;

  @Prop() price: number;

  render() {
    return (
      <div class="product">
        <h2 class="item-name">{this.name}</h2>
        <div class="product-item">
          <img class="product-image" src={this.src} alt="product-image" />
          <product-text desc={this.desc} price={this.price}></product-text>
        </div>
      </div>
    );
  }
}
