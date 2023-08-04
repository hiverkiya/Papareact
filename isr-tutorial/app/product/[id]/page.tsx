import React from 'react'

type Props={
    params:{
        id:string;
    }
}
type Product={
    id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail:string;
    images:string[];
}
async function ProductPage({params:{id}}:Props) {
const res=await fetch(`https://dummyjson.com/products/${id}`)

const product:Product=await res.json()
    return (
        <div>
    <div>ProductPage with ID:{id}</div> 
    <div> Product is {product.title}</div>
  <div>Product price is ${product.price}</div>
    </div>)
}

export default ProductPage

export async function generateStaticParams(){
    const res=await fetch("https://dummyjson.com/products")
    const {total}=await res.json();
    const productPaths=Array.from({length:total},(_,i)=>({
        id:`/product/${i+1}`,
    }))
    console.log(productPaths)
    return productPaths
}