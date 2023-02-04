import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from '../../models/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data:product={
    title:'sebas el pro',
    price:3,
    description:'utiles/papitoricooooo',
    categoryId:1,
    images:['https://i.stack.imgur.com/b4GHk.png']
  }

  dataupdate:product={
    description:'utiles/enriqueMera',
    categoryId:1,
  }
  url:string='http://api.escuelajs.co/api/v1/products'
  title:any
  constructor(private productservice:ProductService){}

  ngOnInit(): void {
      //this.getProduct()
      //this.getProducts()
      this.createproduct()
      //this.deleteproduct()
     
  }

 getProduct(){
    this.productservice.getOne(66).subscribe(e=>{
      return e
    })
  }
  getProducts():void{
    this.productservice.getAll().subscribe(e=>{
      return e
    })
  }
  createproduct(){
    this.productservice.store(this.data).subscribe(e=>{
      return e
    })
  }
  updateproduct(){
    this.productservice.updateproduct(this.dataupdate,60).subscribe(e=>{
      return e
    })
  }

  deleteproduct(){
    this.productservice.destroy(89).subscribe(e=>{
      return e
    })
  }
}






