import React from 'react'
import {notFound} from 'next/navigation'
import Product from '@/components/Product';
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

if(!product.id) 
    notFound()

    return (
        <div>
    <div>ProductPage with ID:{id}</div> 
    <Product product={product}/>
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