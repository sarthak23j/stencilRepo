import { Component, Prop, Event, State, Listen, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'cart-button',
  styleUrl: 'cart-button.css',
  shadow: true,
})
export class CartButton {

  @Prop() i: number;
  @State() added: boolean = false;

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
      <button class="buy-btn">{this.added ? "Remove from cart" : "Add to cart"}</button>
      );
  }

}
