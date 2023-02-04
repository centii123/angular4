import { category } from "./category.entity" 

export interface product{
    categoryID?:category
    id?:number
    title?:string
    price?: number
    description?:string
    images?:string[]
    categoryId?:number
    
}