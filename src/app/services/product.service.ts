import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../models/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url:string='http://api.escuelajs.co/api/v1/products'

  constructor(private http:HttpClient){}

  getAll():Observable<product>{
    return this.http.get(this.url)
  }
  getOne(id:number):Observable<product>{
    let url=`${this.url}/${id}`
    return this.http.get(url)
  }
  store(data:product):Observable<product>{
    return this.http.post(this.url,data)
  }
  updateproduct(data:product,id:number):Observable<product>{
    let url= `${this.url}/${id}`
    return this.http.put(url,data)
  }

  destroy(id:number):Observable<product>{
    let url= `${this.url}/${id}`
    return this.http.delete(url)
  }

}
