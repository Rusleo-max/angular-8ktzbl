import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {products} from '../products';
import {CartService} from '../core/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {
  }

  addToCart(product) {
    this.cartService.addToCart(product)
    window.alert(`Your product - ${product.name} - has been added to the cart!`)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('productId'));
      this.product = products[params.get('productId')];
    });
  }
}
