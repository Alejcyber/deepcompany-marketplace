import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketplaceResponse } from '../model/marketplace-response.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAll(pageIndex: number): Observable<MarketplaceResponse>{
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('x-apikey-marketplace', 'rIH99Wc_HcMlonQTugzKySx5J31O2XgFJsLVJS8m9tF-Zyr01SfiwmvQZFVuqErM8soJeGV-RCgdSMXpT_25wg');

    return this.http.get<MarketplaceResponse>('https://ds.deepcompany.com/marketplace/product-demo?page='+pageIndex,{headers});
  }

  getDetail(id: string): Observable<Product>{
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('x-apikey-marketplace', 'rIH99Wc_HcMlonQTugzKySx5J31O2XgFJsLVJS8m9tF-Zyr01SfiwmvQZFVuqErM8soJeGV-RCgdSMXpT_25wg');

    return this.http.get<Product>('https://ds.deepcompany.com/marketplace/product-demo/'+id,{headers});
  }

}
