import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/model/product.model';
import { MarketplaceResponse } from '../../shared/model/marketplace-response.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatPaginatorModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  pageIndex = 1;
  totalItems: number = 0;

  products: Array<Product> = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getAll();
    
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex + 1;
    this.getAll();
  }

  getAll(){
    this.productService.getAll(this.pageIndex).subscribe( (res: MarketplaceResponse) => {
      console.log(res);
      this.products = res.results;
      this.totalItems = res.records;
    });
  }

}
