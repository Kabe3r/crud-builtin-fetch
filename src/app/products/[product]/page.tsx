// import Product from "@/app/components/Product";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getSingleProduct(id: string) {
 const res = await fetch(`https://dummyjson.com/products/${id}`);
 return await (res.json()) as Product
}

export default async function page({ params }: { params : { product: string } }) {
    const product = await getSingleProduct(params.product);
  
    return (
        <div key={product?.id} className="mx-auto bg-blue-400 w-48 h-auto text-center">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <span>{product?.stock}</span>
        <span>{product?.rating}</span>
        <p>{product?.brand}</p>
        <p>{product?.category}</p>
        <Image src={product?.thumbnail} alt="product-img" width={40} height={40} />
        <Link href='/products'>go to products</Link>
        </div>
  )
}
