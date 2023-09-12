import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'product-carousel',
  styleUrl: 'product-carousel.css',
  shadow: true,
})
export class ProductCarousel {

  @Prop() products: any;
  
  @Prop() data: any = {
    "products": [
      {
        "src": "abc",
        "name": "a",
        "desc": "aaa",
        "price": 10.00
      },
      {
        "src": "def",
        "name": "d",
        "desc": "ddd",
        "price": 9.99
      },
      {
        "src": "ghi",
        "name": "g",
        "desc": "ggg",
        "price": 20.50
      }
    ]
  }

  parseData() {
    const dataHere = JSON.parse(this.data);
    console.log(dataHere);
    this.products = dataHere.products.map((product) => {
      // return {
      //   src: product.src,
      //   name: product.name,
      //   desc: product.desc,
      //   price: product.price,
      // };

      return(
        <product-item
          src={product.src}
          name={product.name}
          desc={product.desc}
          price={product.price}
        >
        </product-item>
      )
    });
  }

  render() {
    return (
      <div class="carousel">
        {this.parseData()}
      </div>
    );
  }

}


