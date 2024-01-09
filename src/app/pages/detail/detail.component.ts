import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/model/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit, OnDestroy {

  paramsSub: any;
  product!: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}


  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(
      params => this.loadProduct(params['id'])
    );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  loadProduct(id: string){
    this.productService.getDetail(id).subscribe(res => {
      this.product = res;
      console.log(this.product);
    });
  }

}
