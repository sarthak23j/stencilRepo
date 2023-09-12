import { Component, h, Listen, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'product-text',
  styleUrl: 'product-text.css',
  shadow: true,
})
export class FirstComponent {
  @Prop() i: number;
  @Prop() desc: string;
  @State() added: boolean = false;
  @Prop() price: number;
  @Event({bubbles:true}) cartChange: EventEmitter<any[]>;

  @Listen('click')
  handleClick(){
    this.added = !this.added;
    this.cartChange.emit([
      this.added,
      this.i])
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
